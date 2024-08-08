import { currentUser } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
	const session = useSession()
	const user = session.data?.user

    return useQuery({
		queryKey: ["user"],
		queryFn: () => currentUser(),
		initialData: user
	});
}