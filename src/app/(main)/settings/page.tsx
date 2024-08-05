import CardWrapper from "@/components/global/CardWrapper";
import UserSettingsInfo from "@/components/global/settings/UserSettingsInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/auth";

const SettingsPage = async () => {
	const user = await currentUser()

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<Card className="col-span-2">
				<CardHeader>
					<CardTitle>User Informations</CardTitle>
				</CardHeader>
				<Separator />
				<UserSettingsInfo User={user} />
			</Card>
		</div>
	);
};

export default SettingsPage;
