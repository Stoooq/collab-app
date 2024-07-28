"use server";

import { LoginSchemaType } from "@/components/auth/login-form";
import { LoginSchema } from "@/schemas";

export const login = async (values: LoginSchemaType) => {
	const validation = LoginSchema.safeParse(values);

	if (!validation.success) {
		return { error: "Invalid fields" };
	}

	return { success: "Email sent" };
};
