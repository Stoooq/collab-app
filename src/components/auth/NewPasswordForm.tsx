"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { newPassword } from "@/actions/new-password";
import { useState, useTransition } from "react";
import { NewPasswordSchema } from "@/schemas";
import { useSearchParams } from "next/navigation";

export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;

export const NewPasswordForm = () => {
	const searchParams = useSearchParams()
	const token = searchParams.get("token")

    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
	const [isPending, startTransition] = useTransition();

	const form = useForm<NewPasswordSchemaType>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	const onSubmit = (values: NewPasswordSchemaType) => {
		startTransition(() => {
			newPassword(values, token).then((data) => {
                setError(data?.error)
                setSuccess(data?.success)
            })
		});
	};

	return (
		<CardWrapper
			headerLabel="Forgot your password?"
			backButtonLabel="Back to login"
			backButtonHref="/auth/login"
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder="******"
											type="password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormSuccess message={success} />
					<FormError message={error} />
					<Button type="submit" disabled={isPending} className="w-full">
						Reset password
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
