import User from '@/lib/models/User.model'
import connect from '@/lib/mongoose'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    GithubProvider({
      profile(profile) {
        let userRole = 'github_user'
        if (profile?.email == 'prodipkrishna01@gmail.com') {
          userRole = 'admin'
        }
        return {
          id: profile?.id,
          name: profile?.name,
          email: profile?.email,
          image: profile?.avatar_url,
          role: userRole
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      profile(profile) {

        let userRole = 'google_user'
        if (profile?.email == 'prodipkrishna01@gmail.com') {
          userRole = 'admin'
        }

        const authProfile = {
          id: profile?.sub,
          name: profile?.given_name + ' ' + profile?.family_name,
          email: profile?.email,
          image: profile?.picture,
          role: userRole
        }
        return authProfile
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
      async authorize(credentials){
        console.log(credentials)
        try {
          await connect()
          const foundUser = await User.findOne({email: credentials.email}).lean().exec()
          if(foundUser){
            console.log('user exists')
            const match = await bcrypt.compare(credentials.password, foundUser.password)

            if(match){
              console.log('Good pass')
              delete foundUser.password
              foundUser['role'] = 'unverified email'
              return foundUser
            }
          }
          console.log('user exists')
        } catch (error) {
          console.log(error)
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
