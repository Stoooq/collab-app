"use client";

import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserSettingsInfoSkeleton = () => {
	return (
		<CardContent className="flex flex-col p-6">
			<div className="flex justify-between cursor-pointer mb-4">
				<p>ID</p>
				<Skeleton className="w-[200px] h-5 p-1" />
			</div>
			<div className="flex justify-between cursor-pointer mb-4">
				<p>Name</p>
				<Skeleton className="w-[100px] h-5 p-1" />
			</div>
			<div className="flex justify-between cursor-pointer mb-4">
				<p>Email</p>
				<Skeleton className="w-[200px] h-5 p-1" />
			</div>
			<div className="flex justify-between cursor-pointer mb-4">
				<p>2FA</p>
				<Skeleton className="w-[100px] h-5 p-1" />
			</div>
		</CardContent>
	);
};

export default UserSettingsInfoSkeleton;
