import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const About = () => {
	return (
		<Wrapper>
			<Title>About Me</Title>
			<Info>
				I am a self-motivated, analytical and enthusiastic individual
				who is currently completing a Professional Software Development
				course at Code Clan and have a BEng Hons Electrical and Computer
				Engineering from Heriot Watt University. I have over 12 years of
				experience working within a customer focused role who often had
				to communicate with internal and external stakeholders. I am
				currently seeking out an entry level position as a junior
				developer which will offer the opportunity to develop my skills
				professionally by expanding on the concepts I have and will
				learn.
			</Info>
			<h3>Languages/Frameworks</h3>
			<Skills>
				<a data-tip="Flask, Jinja">
					<ImageIcon
						src={require("../images/python.webp")}
						alt="Python"
					></ImageIcon>
				</a>
				<ReactTooltip place="bottom" type="dark" effect="solid" />
				<ImageIcon
					src={require("../images/html.webp")}
					alt="HTML"
				></ImageIcon>
				<ImageIcon
					src={require("../images/css.webp")}
					alt="CSS"
				></ImageIcon>
				<a data-tip="React">
					<ImageIcon
						src={require("../images/javascript.webp")}
						alt="JS"
					></ImageIcon>
				</a>
			</Skills>
			<h3>Databases</h3>
			<Skills>
				<a data-tip="PGAdmin, Postico">
					<ImageIcon
						src={require("../images/postgres.webp")}
						alt="Postgres"
					></ImageIcon>
				</a>
				<a data-tip="Insomnia, Compass">
					<ImageIcon
						src={require("../images/mongo.webp")}
						alt="MongoDB"
					></ImageIcon>
				</a>
			</Skills>{" "}
			<h3>Testing</h3>
			<Skills>
				<ImageIcon
					src={require("../images/cypress.webp")}
					alt="Cypress"
				></ImageIcon>
			</Skills>
			<p>postgres - pgadmin, postico, MongoDB - compass</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 82vh;
`;

const Title = styled.h1`
	text-decoration: underline;
	margin-bottom: 5%;
	font-size: 4.5vh;
`;

const Info = styled.p`
	border: 4px solid #f7ce3e;
	box-shadow: 10px 10px 5px #f7ce3e;
	background-color: #0a1612;
	border-radius: 15px;
	padding: 2%;
	text-align: center;
	width: 60vw;
	height: max-content;
	color: #c5c1c0;
	font-size: 1.7vh;
`;

const Skills = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const ImageIcon = styled.img`
	width: 5vw;
	aspect-ratio: 1/1;
	border-radius: 20%;
	border: 1px solid white;
	margin: 0.5%;
`;

export default About;
