"use client"

import { CardContent } from "@/components/ui/card";
import { currentUser } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import UserSettingsInfoSkeleton from "./UserSettingsInfoSkeleton";

const UserSettingsInfo = ({ User }: any) => {
    const { data: user, error, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => currentUser(),
        initialData: User,
    })

	if (isLoading) return <UserSettingsInfoSkeleton />

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
			<button>Change User Settings</button>
		</CardContent>
	);
};

export default UserSettingsInfo;
