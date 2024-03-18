import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import {GithubAuth, GoogleAuth} from "../../../insterface"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
    GoogleProvider(<GoogleAuth>{
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider(<GithubAuth>{
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  //theme: {
    // colorScheme: "light"z, // "auto" | "dark" | "light"
    // brandColor: "", // Hex color code
    // logo: "", // Absolute URL to image
    // buttonText: "" // Hex color code
  //},

}

export default NextAuth(authOptions)