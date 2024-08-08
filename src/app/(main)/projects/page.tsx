import Projects from "@/components/global/projects/Projects";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ProjectsPage = () => {
	return (
		<div className="grid grid-cols-1">
			<Card>
				<CardHeader>
					<CardTitle>Projects List</CardTitle>
				</CardHeader>
				<Separator />
                <Projects />
			</Card>
		</div>
	);
};

export default ProjectsPage;
