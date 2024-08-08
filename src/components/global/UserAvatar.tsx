import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const UserAvatar = () => {
	const { data: user } = useCurrentUser();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer">
					{!user?.image ? (
						<AvatarFallback>?</AvatarFallback>
					) : (
						<AvatarImage src={user?.image} />
					)}
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" side="right">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>cos2</DropdownMenuItem>
				<DropdownMenuItem>cos3</DropdownMenuItem>
                <DropdownMenuSeparator />
				<DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
					<button onClick={() => signOut()}>Sign Out</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAvatar;
