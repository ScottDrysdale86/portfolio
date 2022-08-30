import styled from "styled-components";

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
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #c5c1c0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 82vh;
`;

const Title = styled.h1`
	text-decoration: underline;
	margin: 0;
	font-size: 4.5vh;
`;

const Info = styled.p`
	border: 4px solid #f7ce3e;
	box-shadow: 10px 10px 5px #f7ce3e;

	background-color: #0a1612;
	border-radius: 15px;
	padding: 2%;
	text-align: center;
	width: 60%;
	color: #c5c1c0;
	font-size: 2.2vh;
`;

export default About;
