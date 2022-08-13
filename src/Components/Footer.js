import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<SocialItem>
				<LinkTagLinked href="http://www.linkedin.com" target="_blank">
					<LinkPic
						src={require("../images/linked.jpeg")}
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
						src={require("../images/git.jpeg")}
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
	background-color: #e9ac1f;
	padding-left: 20%;
`;

const SocialItem = styled.li`
	display: flex;
	list-style: none;
	margin: 2%;
`;

const LinkTagLinked = styled.a`
	text-align: right;
	/* margin-right: 3%; */
`;

const LinkTagGit = styled.a`
	text-align: left;
`;

const LinkPic = styled.img`
	width: 20%;
	mix-blend-mode: multiply;
`;

const LinkPicGit = styled.img`
	width: 10%;
	mix-blend-mode: multiply;
`;
export default Footer;
