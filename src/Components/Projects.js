import styled from "styled-components";

const Projects = () => {
	return (
		<Wrapper>
			<ProjectBox>
				<Title>Employee Management System</Title>
				<Pic src={require("../images/EMS.png")} alt="EMS"></Pic>
				<Description>
					Employee Management System made with Python, fklask, HTML
					and CSS
				</Description>
				<GitLink
					href="https://github.com/ScottDrysdale86/employee_management_system_project"
					target="_blank"
				>
					Link to Source
				</GitLink>
			</ProjectBox>
			<ProjectBox>
				<Title>Upcoming JavaScript Project</Title>
				<Pic></Pic>
				<Description>No Idea Yet!!</Description>
				<GitLink></GitLink>
			</ProjectBox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ProjectBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 4px solid #75fd92;
	border-radius: 30px;
	margin: 3%;
	padding: 1%;
	width: 50%;
`;

const Title = styled.h2`
	text-align: center;
	text-decoration: underline;
`;
const Pic = styled.img`
	text-align: center;
	width: 30%;
`;

const Description = styled.p`
	text-align: center;
`;
const GitLink = styled.a`
	color: black;
	font-weight: bold;
	text-decoration: none;
	list-style: none;
	background-color: #e9ac1f;
	border: 3px solid black;
	border-radius: 20px;
	padding: 1%;

	&:hover {
		background-color: Black;
		color: #e9ac1f;
		border: 3px solid #e9ac1f;
		border-radius: 20px;
	}
`;

export default Projects;
