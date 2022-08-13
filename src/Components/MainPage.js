import styled from "styled-components";

const MainPage = () => {
	return (
		<Wrapper>
			<ProfilePic src={require("../images/me.png")} alt="Me"></ProfilePic>

			<Details>
				<Name> 👋 Hi, I'm Scott</Name>
				<Bullet> 💻 I'm a Junior Software Developer.</Bullet>
				<Bullet> 🌍 Based in West Lothian, Scotland</Bullet>
				<Bullet> 💭 Student at CodeClan</Bullet>
				<Bullet> 🔗 Let's Connect!</Bullet>
			</Details>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 65vh;
`;

const ProfilePic = styled.img`
	width: 20%;
	margin: 1%;
	border: solid #75fd92 0.5rem;
	border-radius: 50%;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
`;

const Name = styled.h2``;

const Bullet = styled.h5`
	margin: 0;
	margin-bottom: 5%;
	width: max-content;
`;
export default MainPage;
