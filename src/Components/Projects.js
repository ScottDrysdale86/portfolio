import styled from "styled-components";
import { useEffect } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Projects = () => {
	useEffect(() => {
		const obj = document.querySelector("#videos");
		obj.defaultPlaybackRate = 2;
		obj.load();
		console.log(`find video ${obj.defaultPlaybackRate}`); // 1
	}, []);
	return (
		<Wrapper>
			<TopTitle>Projects</TopTitle>
			<Carousel slide={false}>
				<CarouselItem interval={3000000}>
					<ProjectBox>
						<Title>
							Employee Management System <br /> Solo - 1 week
						</Title>
						<Pic src={require("../images/EMS.png")} alt="EMS"></Pic>
						<SubHeading>Task</SubHeading>
						<Description>
							Build an app which allows a company to track the
							current employees. This will be for admin/management
							only.
						</Description>
						<SubHeading>Tech</SubHeading>
						<Description>
							Back-End: Python with Flask framework using Jinja.
							Psycopg2 was used as the database adaptor. <br />
							Front-End: HTML, CSS
						</Description>
						<SubHeading>MVP</SubHeading>
						<ListedTasks>
							<Task>
								The app should allow the user to create, update
								and delete an employee. CRUD
							</Task>
							<Task>
								Each employee will have a name, a set
								organisation level and log in credentials.
							</Task>
							<Task>
								Each log in credential will have a pin and a
								passcode.
							</Task>
							<Task>
								There will be 2 level types (staff and manager)
							</Task>
							<Task>
								The user should be able to filter by level to
								display all employees within that level
							</Task>
						</ListedTasks>
						<SubHeading>Extension</SubHeading>
						<ListedTasks>
							<Task>
								Using the credentials, the employee should be
								able to clock in and clock out.
							</Task>
							<Task>
								Employee can only clock in if credentials are
								correct.
							</Task>
							<Task>
								Employee should only be able to clock out if
								they have already clocked in
							</Task>
							<Task>
								Create a filter which will show a list of
								employees’ clock ins for a week.
							</Task>
						</ListedTasks>
						<SubHeading>If I Had More Time:</SubHeading>
						<Description>
							Staff member clock in validation <br />
							Show individual clock’s by staff member <br />
							Total each staff members hours
							<br />
							Cross reference contracted hours to clocked hours
							for a given week.
						</Description>
						<SubHeading>Reflection</SubHeading>
						<Description>
							This was a good and challenging first project after
							learning the tech stack for only 4 weeks. I learned
							that working with DateTime can be tricky and to
							watch out for columns with the same name when
							designing/joining database tables. Overall I enjoyed
							this project and gained further understanding of
							using Flask and RestFul routes
						</Description>
						<GitLink
							href="https://github.com/ScottDrysdale86/employee_management_system_project"
							target="_blank"
						>
							Link to Source
						</GitLink>
					</ProjectBox>
				</CarouselItem>
				<CarouselItem interval={3000000}>
					<ProjectBox>
						<Title>
							Football League Standings
							<br />
							Solo - 1 Week
						</Title>
						<Vids
							id="videos"
							width="100%"
							controls
							autoplay
							src={require("../images/footballApp.mov")}
							type="video/mp4"
						></Vids>
						<SubHeading>Task</SubHeading>
						<Description>asdfghjk</Description>
						<SubHeading>Tech</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>MVP</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>Extension</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>If I had more time</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>Reflection</SubHeading>
						<Description>sdfghjkl</Description>
						<Description>
							React App utilising an API to access and display
							data. User can filter various football leagues from
							around the world as well as filter by season to show
							results. Can also select a team in the league
							displayed to get more information.
						</Description>
						<GitLink
							href="https://github.com/ScottDrysdale86/Week7-reactApp-API-football"
							target="_blank"
						>
							Link to Source
						</GitLink>
					</ProjectBox>
				</CarouselItem>
				<CarouselItem interval={3000000}>
					<ProjectBox>
						<Title>
							Devil's Grip <br />
							Group - 1 week
						</Title>
						<Vids
							id="videos"
							width="100%"
							controls
							autoplay
							src={require("../images/DevilsGripcomp2.mov")}
							type="video/mp4"
						></Vids>
						<SubHeading>Task</SubHeading>
						<Description>asdfghjk</Description>
						<SubHeading>Tech</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>MVP</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>Extension</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>If I had more time</SubHeading>
						<Description>sdfghjkl</Description>
						<SubHeading>Reflection</SubHeading>
						<Description>sdfghjkl</Description>
						<Description>
							React app which allows the user to play a
							solitaire-based card game Devil’s Grip.
						</Description>
						<GitLink>Link to Source</GitLink>
					</ProjectBox>
				</CarouselItem>
			</Carousel>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: max-content;
`;

const TopTitle = styled.h1`
	text-decoration: underline;
	margin: 0;
	font-size: 4.5vh;
`;

const ProjectBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #0a1612;
	border: 4px solid #f7ce3e;
	box-shadow: 10px 10px 5px #f7ce3e;
	border-radius: 30px;
	margin: 5%;
	padding: 1%;
	width: 80vw;
	aspect-ratio: 3/1;
`;

const Title = styled.h2`
	text-align: center;
	text-decoration: underline;
	color: #c5c1c0;
	font-size: 3vh;
	margin-bottom: 1%;
`;
const SubHeading = styled.h3`
	text-align: center;
	text-decoration: underline;
	color: #c5c1c0;
	font-size: 2vh;
`;
const Pic = styled.img`
	text-align: center;
	width: 60%;
	height: 30vh;
	margin-bottom: 1%;
`;
const Vids = styled.video`
	text-align: center;
	width: 70%;
	aspect-ratio: 2/1;
	border: solid 3px #f7ce3e;
	border-radius: 5%;
`;

const Description = styled.p`
	text-align: center;
	color: #c5c1c0;
	font-size: 2vh;
	margin-bottom: 1.5%;
`;
const GitLink = styled.a`
	color: black;
	font-weight: bold;
	text-decoration: none;
	list-style: none;
	background-color: #f7ce3e;
	border: 3px solid #0a1612;

	border-radius: 20px;
	padding: 1%;
	font-size: 2.2vh;

	&:hover {
		background-color: #0a1612;
		color: #f7ce3e;
		border: 3px solid #f7ce3e;
		border-radius: 20px;
	}
`;

const ListedTasks = styled.ul`
	text-align: center;
	list-style-type: square;
	list-style-position: inside;
`;

const Task = styled.li`
	text-align: center;
	color: #c5c1c0;
	font-size: 2vh;
`;

export default Projects;
