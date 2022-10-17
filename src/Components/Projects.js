import styled from "styled-components";
import { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Projects = () => {
	const [extraContent, setExtraContent] = useState(false);

	const extraContentPython = (
		<>
			<SubHeading>MVP</SubHeading>
			<ListedTasks>
				<Task>
					The app should allow the user to create, update and delete
					an employee. CRUD
				</Task>
				<Task>
					Each employee will have a name, a set organisation level and
					log in credentials.
				</Task>
				<Task>
					Each log in credential will have a pin and a passcode.
				</Task>
				<Task>There will be 2 level types (staff and manager)</Task>
				<Task>
					The user should be able to filter by level to display all
					employees within that level
				</Task>
			</ListedTasks>
			<SubHeading>Extension</SubHeading>
			<ListedTasks>
				<Task>
					Using the credentials, the employee should be able to clock
					in and clock out.
				</Task>
				<Task>
					Employee can only clock in if credentials are correct.
				</Task>
				<Task>
					Employee should only be able to clock out if they have
					already clocked in
				</Task>
				<Task>
					Create a filter which will show a list of employees’ clock
					ins for a week.
				</Task>
			</ListedTasks>
			<SubHeading>If I Had More Time:</SubHeading>
			<Description>
				Staff member clock in validation <br />
				Show individual clock’s by staff member <br />
				Total each staff members hours
				<br />
				Cross reference contracted hours to clocked hours for a given
				week.
			</Description>
			<SubHeading>Reflection</SubHeading>
			<Description>
				This was a good and challenging first project after learning the
				tech stack for only 4 weeks. I learned that working with
				DateTime can be tricky and to watch out for columns with the
				same name when designing/joining database tables. Overall I
				enjoyed this project and gained further understanding of using
				Flask and RestFul routes
			</Description>
		</>
	);

	const extraContentFootball = (
		<>
			<SubHeading>MVP</SubHeading>
			<ListedTasks>
				<Task>
					Filter various football leagues from around the world
				</Task>
				<Task>Filter by season to show results.</Task>
				<Task>
					Can also select a team in the league displayed to get more
					information.
				</Task>
			</ListedTasks>
			<SubHeading>If I Had More Time</SubHeading>
			<Description>
				Spend more time working with Google Charts as this was added in
				last minute. Look at optimising the initial loading as it
				appears to fetch twice on start up
			</Description>
			<SubHeading>Reflection</SubHeading>
			<Description>
				I had fun making and designing this and overall I am happy with
				what I achieved as it was only approx 2 days worth of work.
			</Description>
		</>
	);

	const extraContentJs = (
		<>
			<SubHeading>MVP</SubHeading>
			<ListedTasks>
				<Task>
					Model a deck of cards presented to the user in a random
					order.
				</Task>
				<Task>
					Implement rules for card stacking that prevent illegal moves
				</Task>
				<Task>
					Allow the user to flip cards from the deck which they can
					then interact with
				</Task>
				<Task>Allow the user to start/end the game</Task>
			</ListedTasks>
			<SubHeading>Extension</SubHeading>
			<ListedTasks>
				<Task>
					Total the users score and take in a name for a leaderboard
				</Task>
				<Task>Hint functionality</Task>
				<Task>Easier version with some relaxed rules</Task>
				<Task>The game recognising when there are no legal moves</Task>
			</ListedTasks>
			<SubHeading>If I had more time</SubHeading>
			<Description>
				Add a hint function to help the user. Ad an undo button to step
				back a move. Implement drag and drop instead of click to select.
			</Description>
			<SubHeading>Reflection</SubHeading>
			<Description>
				Overall was a great team project where communication was key. We
				had to ensure that we were all aware of what each other was
				workling on. This was done by having daily stand-ups as well as
				constant messaging.
			</Description>
		</>
	);

	const extraContentBaby = (
		<>
			<SubHeading>MVP</SubHeading>
			<ListedTasks>
				<Task>
					Create a React Native App that allows the user to record
					baby sleep and feed data.
				</Task>
				<Task>
					A user should be able to view baby sleep/feed data in a
					visual way.
				</Task>
				<Task>App should be available on Android and iOS</Task>
			</ListedTasks>
			<SubHeading>Extension</SubHeading>
			<ListedTasks>
				<Task>Allow multiple babies to be recorded. </Task>
				<Task>Have a built in white noise machine</Task>
				<Task>Have a teeth timer</Task>
				<Task>Sensory video</Task>
			</ListedTasks>
			<SubHeading>If I had more time</SubHeading>
			<Description>
				Add notification feature to remind user a feed or sleep may be
				due.
			</Description>
			<SubHeading>Reflection</SubHeading>
			<Description>
				It was our groups first time using react-native and on
				reflection we jumped a little too quick into getting started and
				decide to use the most recent version of react native-without
				checking stability or compatibility with our imports. That being
				said, once set up, it was a great projectto be part of. I
				started off by implementing the Java Spring backend and then
				moving onto work on front end features. This started with the
				main (add feed) page which allowed the user to log feeds. I
				thewm moved onto the summary page where I dealt with fetching
				the data and number crunching the date/times and feed volumes to
				display charts and average 7 day results. Dealing with the data
				was sometimes a challenge as they were mainly date time formats.
			</Description>
		</>
	);

	const linkName = extraContent ? "Less Info << " : "More Info >> ";

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
							Wah Wah Baby App <br /> Group - 2 week
						</Title>

						<Pic
							src={require("../images/AppScShots.png")}
							alt="Baby App Screenshots"
						></Pic>
						<SubHeading>Task</SubHeading>
						<Description>
							Build a cross platform app which allows a uset to
							log sleep and feed data for babies and shows the
							information in a visual way.
						</Description>
						<SubHeading>Tech</SubHeading>
						<Description>
							Back-End: Java Spring Boot.
							<br />
							Front-End: React Native
						</Description>
						<ExtraBox>
							<ExtraLink
								className="read-more-link"
								onClick={() => {
									setExtraContent(!extraContent);
								}}
							>
								<ExtraTitle>{linkName}</ExtraTitle>
							</ExtraLink>
							{extraContent && extraContentBaby}
						</ExtraBox>
						<GitLink
							href="https://github.com/ScottDrysdale86/babyApp"
							target="_blank"
						>
							Link to Backend Source
						</GitLink>
						<GitLink
							href="https://github.com/ScottDrysdale86/BabyAppFrontEnd"
							target="_blank"
						>
							Link to Frontend Source
						</GitLink>
					</ProjectBox>
				</CarouselItem>
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
						<ExtraBox>
							<ExtraLink
								className="read-more-link"
								onClick={() => {
									setExtraContent(!extraContent);
								}}
							>
								<ExtraTitle>{linkName}</ExtraTitle>
							</ExtraLink>
							{extraContent && extraContentPython}
						</ExtraBox>
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
						<Description>
							Create an application that makes a request to an API
							and displays the data.
						</Description>
						<SubHeading>Tech</SubHeading>
						<Description>
							React.js, Styled Components, API's, CSS
						</Description>
						<ExtraBox>
							<ExtraLink
								className="read-more-link"
								onClick={() => {
									setExtraContent(!extraContent);
								}}
							>
								<ExtraTitle>{linkName}</ExtraTitle>
							</ExtraLink>
							{extraContent && extraContentFootball}
						</ExtraBox>

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
						<Description>
							The react app allows the user to play the solitaire
							based card game called Devil's Grip.
						</Description>
						<SubHeading>Tech</SubHeading>
						<Description>
							Back-end: MongoDB and Express. Front-end: React.js,
							HTML, CSS, Styled Components.
						</Description>
						<ExtraBox>
							<ExtraLink
								className="read-more-link"
								onClick={() => {
									setExtraContent(!extraContent);
								}}
							>
								<ExtraTitle>{linkName}</ExtraTitle>
							</ExtraLink>
							{extraContent && extraContentJs}
						</ExtraBox>
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

const ExtraBox = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	height: 40vh;
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
const ExtraTitle = styled.h2`
	text-decoration: underline;
	margin: 0;
	color: #ff6c02;
	margin-bottom: 3%;
	font-size: 3vh;
`;
const ExtraLink = styled.a`
	text-decoration: none;
	list-style: none;
`;

export default Projects;
