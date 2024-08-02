import Infobar from "@/components/global/Infobar";
import Sidebar from "@/components/global/Sidebar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex bg-background">
			<Sidebar />
			<div className="flex flex-col w-screen p-6">{children}</div>
		</div>
	);
};

export default layout;
