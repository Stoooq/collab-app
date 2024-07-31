"use server";

import { signIn } from "@/auth";
import { LoginSchemaType } from "@/components/auth/login-form";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const login = async (values: LoginSchemaType) => {
	const validation = LoginSchema.safeParse(values);

	if (!validation.success) {
		return { error: "Invalid fields" };
	}

	const { email, password } = validation.data;

	const existingUser = await getUserByEmail(email)

	if (!existingUser || !existingUser.email || !existingUser.password) {
		return { error: "Email does not exist" }
	}

	if (!existingUser.emailVerified) {
		const verificationToken = await generateVerificationToken(existingUser.email)

		await sendVerificationEmail(verificationToken.email, verificationToken.token)

		return { success: "Confirmation email sent" }
	}

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CallbackRouteError":
					return { error: "Invalid credentials" };
				default:
					console.log(error.type)
					return { error: "Something went wrong" };
			}
		}

		throw error;
	}

	return { success: "User logged" };
};
