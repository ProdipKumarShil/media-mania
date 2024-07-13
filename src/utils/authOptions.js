import User from '@/lib/models/User.model'
import connect from '@/lib/mongoose'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async session({session}){
      return session
    },
    async signIn({user}){
      try {
        await connect()
        const existingUser = await User.findOne({email: user?.email})
        if(!existingUser){
          await User.create({email: user.email, name: user.name, password: null, image: user.image})
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
    
  },
  secret: process.env.NEXTAUTH_SECRET
}
