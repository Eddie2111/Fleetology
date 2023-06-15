import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
// import FacebookProvider from "next-auth/providers/facebook"
// import GithubProvider from "next-auth/providers/github"
import TwitterProvider from 'next-auth/providers/twitter'
// import Auth0Provider from "next-auth/providers/auth0"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? 'default-client-id',
            clientSecret: process.env.GOOGLE_SECRET ?? 'default-client-secret',
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID ?? 'default-client-id',
            clientSecret: process.env.TWITTER_SECRET ?? 'default-client-secret',
            version: '2.0',
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            token.userRole = 'admin'
            return token
        },
    },
}

export default NextAuth(authOptions)
