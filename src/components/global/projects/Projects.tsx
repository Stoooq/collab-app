import { CardContent } from "@/components/ui/card";
import { Folder } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
	return (
		<CardContent className="flex flex-col p-6">
			<div className="flex justify-between bg-primary/15 hover:bg-primary/20 transition-colors p-4 rounded-lg">
				<div className="flex items-center gap-6">
					<div><Folder /></div>
					<div>
						<div>Title</div>
						<div>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
							praesentium?
						</div>
					</div>
				</div>
				<div className="flex items-center gap-6">
                    <div>Emojis</div>
                    <Link href={`/projects`}>Open</Link>
				</div>
			</div>
		</CardContent>
	);
};

export default Projects;
