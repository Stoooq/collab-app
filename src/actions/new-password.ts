"use server";

import { NewPasswordSchemaType } from "@/components/auth/NewPasswordForm";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs"
import db from "@/lib/db"

export const newPassword = async (
	values: NewPasswordSchemaType,
	token: string | null
) => {
    if (!token) return { error: "Missing token" }

    const validation = NewPasswordSchema.safeParse(values)

    if (!validation.success) return { error: "Invalid fields" }

    const { password } = validation.data

    const existingToken = await getPasswordResetTokenByToken(token)
    if (!existingToken) return { error: "Invalid token" }

    const hasExpired = new Date(existingToken.expires) < new Date()
    if (hasExpired) return { error: "Token has expired" }

    const existingUser = await getUserByEmail(existingToken.email)
    if (!existingUser) return { error: "Emaildoes not exist" }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword }
    })

    await db.passwordResetToken.delete({
        where: { id: existingToken.id }
    })

    return { success: "Password updated" }
};