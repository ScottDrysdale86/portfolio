import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
	return (
		<NavBar>
			<Item>
				<Link className="styledLink" to="/portfolio">
					Home
				</Link>
			</Item>
			<Item>
				<Link className="styledLink" to="/portfolio/About">
					About
				</Link>
			</Item>
			<Item>
				<Link className="styledLink" to="/portfolio/Projects">
					Projects
				</Link>
			</Item>
		</NavBar>
	);
};

const NavBar = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 1.3rem;
	font-weight: bold;
	background-color: #1a2930;
	padding: 0;
	margin: 0;
`;

const Item = styled.li`
	font-size: 2rem;
	list-style: none;
	margin-right: 3%;
	margin-bottom: 1%;
`;

export default Navigation;
