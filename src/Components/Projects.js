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
						<Description>
							Employee Management System made with Python, Flask,
							HTML and CSS
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

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80vh;
`;

const TopTitle = styled.h1`
	text-decoration: underline;
	margin: 0;
	font-size: 4.5vh;
`;

const ProjectBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #0a1612;
	border: 4px solid #f7ce3e;
	box-shadow: 10px 10px 5px #f7ce3e;
	border-radius: 30px;
	margin: 5%;
	padding: 1%;
	width: 50vw;
	aspect-ratio: 3/1;
`;

const Title = styled.h2`
	text-align: center;
	text-decoration: underline;
	color: #c5c1c0;
	font-size: 3vh;
	margin-bottom: 2%;
`;
const Pic = styled.img`
	text-align: center;
	width: 60%;
	height: 30vh;
`;
const Vids = styled.video`
	text-align: center;
	width: 50%;
	height: 30vh;
	border: solid 3px #f7ce3e;
	border-radius: 30px;
`;

const Description = styled.p`
	text-align: center;
	color: #c5c1c0;
	font-size: 2vh;
	margin-top: 3%;
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

export default Projects;
