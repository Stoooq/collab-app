"use client";

import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserSettingsInfoSkeleton = () => {
	return (
		<CardContent className="flex flex-col p-6">
			<div className="flex justify-between cursor-pointer mb-4">
				<p>ID</p>
				<p className="p-1">
					<Skeleton className="w-[200px] h-5" />
				</p>
			</div>
			<div className="flex justify-between cursor-pointer mb-4">
				<p>Name</p>
				<p className="p-1">
					<Skeleton className="w-[100px] h-5" />
				</p>
			</div>
			<div className="flex justify-between cursor-pointer mb-4">
				<p>Email</p>
				<p className="p-1">
					<Skeleton className="w-[200px] h-5" />
				</p>
			</div>
			<div className="flex justify-between cursor-pointer mb-4">
				<p>2FA</p>
				<p className="p-1">
					<Skeleton className="w-[100px] h-5" />
				</p>
			</div>
		</CardContent>
	);
};

export default UserSettingsInfoSkeleton;
