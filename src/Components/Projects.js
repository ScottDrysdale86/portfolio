import styled from "styled-components";

const Projects = () => {
	return (
		<Wrapper>
			<TopTitle>Projects</TopTitle>
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
				<Title>Football League Standings</Title>
				<Pic
					src={require("../images/football.png")}
					alt="Football APP"
				></Pic>
				<Description>
					React App utilising an API to access and display data. User
					can flter various football leagues from around the world as
					well as filter by season to show results. Can also select a
					team in the league displayed to get more information.
				</Description>
				<GitLink
					href="https://github.com/ScottDrysdale86/Week7-reactApp-API-football"
					target="_blank"
				>
					Link to Source
				</GitLink>
			</ProjectBox>
			<ProjectBox>
				<Title>Upcoming JavaScript Project</Title>
				<Pic></Pic>
				<Description>No Idea Yet!!</Description>
				<GitLink>Link to Source</GitLink>
			</ProjectBox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TopTitle = styled.h1`
	text-decoration: underline;
	margin: 0;
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
	width: 60%;
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
