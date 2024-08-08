import React from "react";

const ProjectDetailPage = ({ params: { id } }: { params: { id: string } }) => {
	return (
		<div>
			Project {id}
		</div>
	);
};

export default ProjectDetailPage;
