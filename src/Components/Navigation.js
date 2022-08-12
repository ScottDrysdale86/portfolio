import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
	return (
		<NavBar>
			<Item>
				<Link className="styledLink" to="/">
					Home
				</Link>
			</Item>
			<Item>
				<Link className="styledLink" to="/About">
					About
				</Link>
			</Item>
			<Item>
				<Link className="styledLink" to="/Projects">
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
	background-color: #e9ac1f;
`;

const Item = styled.li`
	list-style: none;
	margin: 2%;
`;

export default Navigation;
