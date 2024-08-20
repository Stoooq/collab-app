"use client";

import { createProject } from "@/actions/create-project";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CardContent } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useProjects } from "@/hooks/useProjects";
import { ProjectSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Folder } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Projects = () => {
	const { data: projects, isLoading, refetch } = useProjects();
	const { data: user } = useCurrentUser();

	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof ProjectSchema>>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: {
			userId: user?.id,
			title: undefined,
			description: undefined,
		},
	});

	const onSubmit = (values: z.infer<typeof ProjectSchema>) => {
		startTransition(() => {
			createProject({ ...values, userId: user?.id! }).then((data) => {
				// if (data.error) {
				// setError(data.error);
				// }
				// if (data.success) {
				// setSuccess(data.success);
				// }
				refetch();
			});
			// .catch(() => setError("Something went wrong"));
		});
	};

	return (
		<CardContent className="flex flex-col p-6">
			<div>
				{projects?.map((project) => (
					<div
						key={project.id}
						className="flex justify-between p-4 border-primary/15 border-x-[1px] border-y-[0.5px] hover:bg-primary/15 transition-colors first:rounded-t-lg first:border-t-[1px] last:rounded-b-lg last:border-b-[1px]"
					>
						<div className="flex items-center gap-6">
							<div>
								<Folder />
							</div>
							<div>
								<div>{project.title}</div>
								<div>{project.description}</div>
							</div>
						</div>
						<div className="flex items-center gap-6">
							<div>Emojis</div>
							<Link href={`/projects/${project.id}`}>Open</Link>
						</div>
					</div>
				))}
			</div>
			<AlertDialog>
				<AlertDialogTrigger>add new project</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Project Informations</AlertDialogTitle>
					</AlertDialogHeader>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col gap-6"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Title"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Description"
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction type="submit">Create</AlertDialogAction>
							</AlertDialogFooter>
						</form>
					</Form>
				</AlertDialogContent>
			</AlertDialog>
		</CardContent>
	);
};

export default Projects;
