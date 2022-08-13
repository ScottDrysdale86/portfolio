import styled from "styled-components";

const About = () => {
	return (
		<Wrapper>
			<Info className="aboutMe">
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
	display: flex;
	justify-content: center;
`;

const Info = styled.p`
	border: 4px solid #75fd92;
	border-radius: 15px;
	padding: 2%;
	max-width: fit-content;
`;

export default About;
