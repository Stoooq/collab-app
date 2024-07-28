import { auth } from "../../auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default async function UserAvatar() {
	const session = await auth();

	if (!session?.user) return null;

	return (
		<div>
			<Avatar>
				<AvatarImage src={session!.user!.image!} alt="profile" />
				<AvatarFallback>?</AvatarFallback>
			</Avatar>
			{session.user.name}
		</div>
	);
}
