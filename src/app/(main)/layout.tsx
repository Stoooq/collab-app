import Infobar from "@/components/global/Infobar";
import Sidebar from "@/components/global/Sidebar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex bg-background">
			<Sidebar />
			<div className="flex flex-col w-screen">
				<Infobar />
				<div className="static">
					<div className="fixed w-full h-full border-l-primary/30 border-l-2 border-t-primary/30 border-t-2 rounded-2xl"></div>
					<div className="p-6">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default layout;
