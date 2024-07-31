"use server";

import { RegisterSchemaType } from "@/components/auth/register-form";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: RegisterSchemaType) => {
	const validation = RegisterSchema.safeParse(values);

	if (!validation.success) {
		return { error: "Invalid fields" };
	}

	const { email, password, name } = validation.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email)

	if (existingUser) return { error: "Email already in use" };

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		}
	})

	const verificationToken = await generateVerificationToken(email)
	await sendVerificationEmail(verificationToken.email, verificationToken.token)

	return { success: "Confirmation email sent" };
};
