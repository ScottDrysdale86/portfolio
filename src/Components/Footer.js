import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<SocialItem>
				<LinkTagLinked href="http://www.linkedin.com" target="_blank">
					<LinkPic
						src={require("../images/Linked.png")}
						alt="LI logo"
					></LinkPic>
				</LinkTagLinked>
			</SocialItem>
			<SocialItem>
				<LinkTagGit
					href="http://www.github.com/ScottDrysdale86"
					target="_blank"
				>
					<LinkPicGit
						src={require("../images/Git.png")}
						alt="Git logo"
					></LinkPicGit>
				</LinkTagGit>
			</SocialItem>
		</Wrapper>
	);
};

const Wrapper = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	background-color: #1a2930;
	padding: 2%;
	margin: 0;
`;

const SocialItem = styled.li`
	display: flex;
	list-style: none;
	margin-right: 2%;
`;

const LinkTagLinked = styled.a`
	text-align: right;
	&:hover {
		transform: scale(1.05);
	}
`;

const LinkTagGit = styled.a`
	text-align: left;
	&:hover {
		transform: scale(1.05);
	}
`;

const LinkPic = styled.img`
	width: 10%;
`;

const LinkPicGit = styled.img`
	width: 10%;
`;
export default Footer;
