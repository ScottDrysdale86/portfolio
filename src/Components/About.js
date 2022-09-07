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
			<h3>Languages</h3>
			<Skills>
				<a data-tip data-for="python">
					<ImageIcon
						src={require("../images/python.webp")}
						alt="Python"
					></ImageIcon>
				</a>
				<ReactTooltip
					id="python"
					delayHide={1000}
					place="bottom"
					type="dark"
					effect="solid"
				>
					<SmallImageIcon
						src={require("../images/flask.webp")}
						alt="Python"
					></SmallImageIcon>
					<SmallImageIcon
						src={require("../images/jinja.png")}
						alt="HTML"
					></SmallImageIcon>
				</ReactTooltip>

				<ImageIcon
					src={require("../images/html.webp")}
					alt="HTML"
				></ImageIcon>
				<ImageIcon
					src={require("../images/css.webp")}
					alt="CSS"
				></ImageIcon>
				<ImageIcon
					src={require("../images/java.png")}
					alt="CSS"
				></ImageIcon>

				<a data-tip data-for="js">
					<ImageIcon
						src={require("../images/javascript.webp")}
						alt="JS"
					></ImageIcon>
				</a>
				<ReactTooltip
					id="js"
					place="bottom"
					delayHide={1000}
					type="dark"
					effect="solid"
				>
					<SmallImageIcon
						src={require("../images/react-128.webp")}
						alt="Python"
					></SmallImageIcon>
				</ReactTooltip>
			</Skills>

			<h3>Databases</h3>
			<Skills>
				<a data-tip data-for="postgres">
					<ImageIcon
						src={require("../images/postgres.webp")}
						alt="Postgres"
					></ImageIcon>
				</a>
				<ReactTooltip
					id="postgres"
					place="bottom"
					delayHide={1000}
					type="dark"
					effect="solid"
				>
					<SmallImageIcon
						src={require("../images/postico.webp")}
						alt="postico"
					></SmallImageIcon>
					<SmallImageIcon
						src={require("../images/pgadmin2.png")}
						alt="pgadmin"
					></SmallImageIcon>
				</ReactTooltip>

				<a data-tip data-for="mongo">
					<ImageIcon
						src={require("../images/mongo.webp")}
						alt="MongoDB"
					></ImageIcon>
				</a>
				<ReactTooltip
					id="mongo"
					place="bottom"
					delayHide={1000}
					type="dark"
					effect="solid"
				>
					<SmallImageIcon
						src={require("../images/insomnia.png")}
						alt="postico"
					></SmallImageIcon>
					<SmallImageIcon
						src={require("../images/compass.png")}
						alt="pgadmin"
					></SmallImageIcon>
				</ReactTooltip>
			</Skills>
			<h3>Testing</h3>
			<Skills>
				<ImageIcon
					src={require("../images/unnittest.png")}
					alt="Cypress"
				></ImageIcon>

				<ImageIcon
					src={require("../images/mocha.png")}
					alt="Cypress"
				></ImageIcon>
				<ImageIcon
					src={require("../images/junit5.png")}
					alt="Cypress"
				></ImageIcon>
				<ImageIcon
					src={require("../images/cypress.webp")}
					alt="Cypress"
				></ImageIcon>
			</Skills>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	text-decoration: underline;
	margin: 2%;
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
	margin-bottom: 3%;
`;

const Skills = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 1%;
`;

const ImageIcon = styled.img`
	width: 5vw;
	aspect-ratio: 1/1;
	border-radius: 20%;
	border: 1px solid white;
	margin: 2%;
`;

const SmallImageIcon = styled.img`
	width: 2.5vw;
	aspect-ratio: 1/1;
	border-radius: 20%;
	background-color: white;
	border: 1px solid white;
	margin: 5%;
	padding: 1%;
`;

export default About;
