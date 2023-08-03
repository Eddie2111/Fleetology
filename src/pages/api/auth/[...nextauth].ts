import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

// import FacebookProvider from "next-auth/providers/facebook"
// import GithubProvider from "next-auth/providers/github"
// import Auth0Provider from "next-auth/providers/auth0"

interface userprops {
    id: string
    email: string
    password: string
}
interface credentialProps {
    email: string
    password: string
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'user@email.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '*****************',
                },
            },
            async authorize(credentials) {
                //credentials: { email: string; password: string; }, req: NextApiRequest
                // Create a new object with the required fields

                //  console.log(credentials.email,credentials.password)

                // Add logic here to look up the user from the credentials supplied

                // console.log(formData.email, formData.password);
                const user = {
                    id: '1',
                    email: 'J Smith',
                    password: 'sadsa',
                } as userprops
                if (user) {
                    return user
                } else {
                    return null
                }
            },
        }),

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
