"use server";

import { RegisterSchemaType } from "@/components/auth/register-form";
import { RegisterSchema } from "@/schemas";

export const register = async (values: RegisterSchemaType) => {
	const validation = RegisterSchema.safeParse(values);

	if (!validation.success) {
		return { error: "Invalid fields" };
	}

	return { success: "Email sent" };
};
