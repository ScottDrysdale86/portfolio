import styled from "styled-components";

const MainPage = () => {
	return (
		<>
			<Wrapper>
				<ProfilePic
					src={require("../images/me.png")}
					alt="Me"
				></ProfilePic>

				<Details>
					<Name> 👋 Hi, I'm Scott Drysdale</Name>
					<Bullet> 💻 I'm a Software Developer</Bullet>
					<Bullet> 🌍 Based in West Lothian, Scotland</Bullet>
					<Bullet> 💭 Student at CodeClan</Bullet>
					<Bullet> 🔗 Let's Connect Below!</Bullet>
				</Details>
			</Wrapper>
			<Skills>
				<ImageIcon
					src={require("../images/python.webp")}
					alt="Python"
				></ImageIcon>
				<ImageIcon
					src={require("../images/flask.webp")}
					alt="Flask"
				></ImageIcon>
				<ImageIcon
					src={require("../images/html.webp")}
					alt="HTML"
				></ImageIcon>
				<ImageIcon
					src={require("../images/css.webp")}
					alt="CSS"
				></ImageIcon>
				<ImageIcon
					src={require("../images/postgres.webp")}
					alt="Postgres"
				></ImageIcon>
				<ImageIcon
					src={require("../images/javascript.webp")}
					alt="JS"
				></ImageIcon>
				<ImageIcon
					src={require("../images/react-128.webp")}
					alt="React"
				></ImageIcon>
				<ImageIcon
					src={require("../images/mongo.webp")}
					alt="MongoDB"
				></ImageIcon>
				<ImageIcon
					src={require("../images/cypress.webp")}
					alt="Cypress"
				></ImageIcon>
			</Skills>
		</>
	);
};

const Wrapper = styled.div`
	/* background-color: #c5c1c0; */
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 51vh;
	margin: 0 3%;
`;

const ProfilePic = styled.img`
	width: 20%;
	margin: 1%;
	background-color: #f7ce3e;
	border-radius: 50%;
	box-shadow: 10px 10px 5px #f7ce3e;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2%;
`;

const Name = styled.h2`
	font-size: 3.5vh;
	text-shadow: 1px 1px 2px #0a1612, 5px 5px 5px #f7ce3e, 0 0 5px #c5c1c0;
`;

const Bullet = styled.h5`
	margin: 0;
	margin-bottom: 5%;
	width: max-content;
	font-size: 2.2vh;
`;

const Skills = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 30vh;
`;

const ImageIcon = styled.img`
	width: 6vw;
	height: 6vh;
	margin: 5% 0%;
	padding: 1%;
`;

export default MainPage;
