import { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import { saltAndHashPassword } from "./utils/password/functions"
// import { getUserFromDb } from "./utils/db/functions"

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Todo: Implement your user authentication logic here
        try {
          if (!credentials?.username || !credentials?.password) {
            throw new Error('Username and password are required')
          }
          if (credentials.username !== 'test' || credentials.password !== 'test') {
            return null
          }
          return { id: '1', name: 'Test User', role: 'customer' }
        } catch (error) {
          throw new Error(error instanceof Error ? error.message : 'An error occurred during authentication')
        }

        // const user = await getUserFromDb(credentials.username)
        // if (!user) {
        //   throw new Error('User not found')
        // }
        // const hashedPassword = saltAndHashPassword(credentials.password, user.salt)
        // if (hashedPassword !== user.password) {
        //   throw new Error('Invalid password')
        // }
        // return { id: user.id, name: user.username }
    },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
   session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
}
