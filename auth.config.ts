import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Todo: Implement salt and hash password logic
        try {
          if (!credentials?.username || !credentials?.password) {
            throw new Error("Username and password are required");
          }

          // Search the user in the database
          const user = await prisma.user.findUnique({
            where: {
              username: String(credentials.username),
            },
          });

          if (!user) {
            throw new Error("User not found");
          }

          // Check if the hashed password matches
          const paswordMatch = await bcrypt.compare(
            String(credentials.password),
            user.password
          );
          if (!paswordMatch) {
            throw new Error("Invalid password");
          }

          // Return user data if authentication is successful
          return { id: user.id.toString(), name: user.name, role: user.role };
        } catch (error) {
          throw new Error(
            error instanceof Error
              ? error.message
              : "An error occurred during authentication"
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Error code passed in query string as ?error=
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
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
