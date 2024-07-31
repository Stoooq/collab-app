import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"
 
export default { providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    Credentials({
        async authorize(credentials) {
            const validation = LoginSchema.safeParse(credentials)

            if (validation.success) {
                const { email, password } = validation.data
                const user = await getUserByEmail(email)

                if (!user || !user.password) return null

                const passwordMatch = await bcrypt.compare(
                    password,
                    user.password
                )

                if (passwordMatch) return user
            }

            return null
        }
    })
] } satisfies NextAuthConfig