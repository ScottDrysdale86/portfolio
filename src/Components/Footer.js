import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<SocialItem>
				<LinkTagLinked href="http://www.linkedin.com" target="_blank">
					<LinkPic
						src={require("../images/linked.png")}
						alt="LI logo"
					></LinkPic>
				</LinkTagLinked>
			</SocialItem>
			<SocialItem>
				<LinkTagGit
					href="http://www.github.com/ScottDrysdale86"
					target="_blank"
				>
					<LinkPic
						src={require("../images/git.png")}
						alt="Git logo"
					></LinkPic>
				</LinkTagGit>
			</SocialItem>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 1.3rem;
	font-weight: bold;
	background-color: #e9ac1f;
`;

const SocialItem = styled.li`
	display: flex;
	justify-items: center;
	align-items: center;
	text-align: center;
	list-style: none;
	margin: 2%;
	color: #000000;
`;

const LinkTagLinked = styled.a`
	text-align: right;
	margin-right: 3%;
`;

const LinkTagGit = styled.a`
	text-align: left;
`;

const LinkPic = styled.img`
	width: 20%;
`;
export default Footer;
