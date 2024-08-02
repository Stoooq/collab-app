"use server";

import { ResetSchemaType } from "@/components/auth/ResetForm";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";

export const reset = async (values: ResetSchemaType) => {
	const validation = ResetSchema.safeParse(values);

	if (!validation.success) return { error: "Invalid email" };

	const { email } = validation.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser) return { error: "Email not found" };

	const passwordResetToken = await generatePasswordResetToken(email);
	await sendPasswordResetEmail(
		passwordResetToken.email,
		passwordResetToken.token
	);

	return { success: "Reset email sent" };
};
