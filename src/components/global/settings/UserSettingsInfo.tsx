"use client";

import { CardContent } from "@/components/ui/card";
import UserSettingsInfoSkeleton from "./UserSettingsInfoSkeleton";
import { useForm } from "react-hook-form";
import { SettingsSchema } from "@/schemas";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { settings } from "@/actions/settings";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const UserSettingsInfo = () => {
	const { data: user, isLoading, refetch } = useCurrentUser();

	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			name: user?.name || undefined,
			email: user?.email || undefined,
			password: undefined,
			newPassword: undefined,
			isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
		},
	});

	const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data.error) {
						setError(data.error);
					}

					if (data.success) {
						refetch();
						setSuccess(data.success);
					}
				})
				.catch(() => setError("Something went wrong"));
		});
	};

	if (isLoading) return <UserSettingsInfoSkeleton />;

	return (
		<CardContent className="flex flex-col p-6">
			<div className="flex justify-between mb-4">
				<p>ID</p>
				<p className="text-sm font-mono p-1 bg-primary/20 transition-colors rounded-md">
					{user?.id}
				</p>
			</div>
			<div className="flex justify-between mb-4">
				<p>Name</p>
				<p className="text-sm font-mono p-1 bg-primary/20 transition-colors rounded-md">
					{user?.name}
				</p>
			</div>
			<div className="flex justify-between mb-4">
				<p>Email</p>
				<p className="text-sm font-mono p-1 bg-primary/20 transition-colors rounded-md">
					{user?.email}
				</p>
			</div>
			<div className="flex justify-between mb-4">
				<p>2FA</p>
				<p className="text-sm font-mono p-1 bg-primary/20 transition-colors rounded-md">
					{user?.isTwoFactorEnabled ? "ON" : "OFF"}
				</p>
			</div>
			<Dialog
				onOpenChange={() => {
					setSuccess("");
					setError("");
				}}
			>
				<DialogTrigger asChild>
					<button>Change User Settings</button>
				</DialogTrigger>
				<DialogContent className="max-w-[400px]">
					<DialogHeader className="mb-4">
						<DialogTitle className="text-2xl">Edit Profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you&apos;re done.
						</DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col gap-6"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Name"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{!user?.isOAuth && (
								<>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="example.dot@email.com"
														type="email"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="******"
														type="password"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="newPassword"
										render={({ field }) => (
											<FormItem>
												<FormLabel>New Password</FormLabel>
												<FormControl>
													<Input
														{...field}
														placeholder="******"
														type="password"
														disabled={isPending}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="isTwoFactorEnabled"
										render={({ field }) => (
											<FormItem className="flex justify-between">
												<div>
													<FormLabel>Two Factor Authentication</FormLabel>
													<FormDescription>
														Enable two factor authentication
													</FormDescription>
												</div>
												<FormControl>
													<Switch
														disabled={isPending}
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</>
							)}
							<FormError message={error} />
							<FormSuccess message={success} />
							<button type="submit" disabled={isPending}>
								Save
							</button>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</CardContent>
	);
};

export default UserSettingsInfo;
