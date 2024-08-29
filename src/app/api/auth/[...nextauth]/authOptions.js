import User from '@/lib/models/User.model'
import connect from '@/lib/mongoose'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

// function addUser (){

// }

const addUser = async(user) => {
  try {
    await connect()
    const foundUser = await User.findOne({ email: user.email }).lean().exec()
    if(foundUser) {
      return foundUser
    } else {
      const response = await User.create(user)
      return response?._doc
    }
  } catch(error) {
    // console.log(error)
  }
}

export const authOptions = {
  providers: [
    GithubProvider({
      profile(profile) {
        let userRole = 'github_user'
        // if (profile?.email == 'prodipkrishna01@gmail.com') {
        //   userRole = 'admin'
        // }
        const authProfile = {
          id: profile?.id,
          name: profile?.name,
          email: profile?.email,
          image: profile?.avatar_url,
          role: userRole
        }
        return addUser(authProfile)
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      profile(profile) {

        let userRole = 'google_user'

        // if (profile?.email == 'prodipkrishna01@gmail.com') {
        //   userRole = 'admin'
        // }

        const authProfile = {
          id: profile?.sub,
          name: profile?.given_name + ' ' + profile?.family_name,
          email: profile?.email,
          image: profile?.picture,
          role: userRole
        }
        return addUser(authProfile)
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Your Email'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your Password'
        }
      },
      async authorize(credentials) {
        try {
          await connect()
          const foundUser = await User.findOne({ email: credentials.email }).lean().exec()
          if (foundUser) {
            const match = await bcrypt.compare(credentials.password, foundUser.password)

            if (match) {
              delete foundUser.password
              if (foundUser?.email == 'admin@email.com') {
                foundUser['role'] = 'admin'
              } else {
                foundUser['role'] = 'unverified email'
              }
              return foundUser
            }
          }
        } catch (error) {
          // console.log(error)
        }
      }
    },

    )
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    }
  }
}
