import CardWrapper from "@/components/global/CardWrapper";
import UserSettingsInfo from "@/components/global/settings/UserSettingsInfo";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SettingsPage = async () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<Card className="col-span-2">
				<CardHeader>
					<CardTitle>User Informations</CardTitle>
				</CardHeader>
				<Separator />
				<UserSettingsInfo  />
			</Card>
		</div>
	);
};

export default SettingsPage;
