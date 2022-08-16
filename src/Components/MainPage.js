import styled from "styled-components";

const MainPage = () => {
	return (
		<Wrapper>
			<ProfilePic src={require("../images/me.png")} alt="Me"></ProfilePic>

			<Details>
				<Name> 👋 Hi, I'm Scott Drysdale</Name>
				<Bullet> 💻 I'm a Junior Software Developer.</Bullet>
				<Bullet> 🌍 Based in West Lothian, Scotland</Bullet>
				<Bullet> 💭 Student at CodeClan</Bullet>
				<Bullet> 🔗 Let's Connect Below!</Bullet>
			</Details>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1%;
`;

const ProfilePic = styled.img`
	width: 20%;
	margin: 1%;
	/* border: solid #75fd92 0.5rem; */
	/* border: solid #f7ce3e 0.5rem; */

	border-radius: 50%;

	box-shadow: 10px 10px 5px #f7ce3e;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2%;
`;

const Name = styled.h2`
	font-size: 1.5rem;
	text-shadow: 1px 1px 2px #0a1612, 5px 5px 5px #f7ce3e, 0 0 5px #c5c1c0;
`;

const Bullet = styled.h5`
	margin: 0;
	margin-bottom: 5%;
	width: max-content;
	font-size: 1rem;
`;

export default MainPage;
