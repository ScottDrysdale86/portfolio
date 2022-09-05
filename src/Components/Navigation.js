import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
	return (
		<NavBar>
			<Item style={{ "--clr": "#ff6c02" }}>
				<StyledLink
					className="styledLink"
					to="/portfolio"
					data-text="&nbsp;Home"
				>
					&nbsp;Home&nbsp;
				</StyledLink>
			</Item>
			<Item style={{ "--clr": "#ff6c02" }}>
				<StyledLink
					className="styledLink"
					to="/portfolio/About"
					data-text="&nbsp;About"
				>
					&nbsp;About&nbsp;
				</StyledLink>
			</Item>
			<Item style={{ "--clr": "#ff6c02" }}>
				<StyledLink
					className="styledLink"
					to="/portfolio/Projects"
					data-text="&nbsp;Projects"
				>
					&nbsp;Projects&nbsp;
				</StyledLink>
			</Item>
		</NavBar>
	);
};

const StyledLink = styled(Link)`
	font-size: 3em;
	text-decoration: none;
	letter-spacing: 2px;
	line-height: 1em;
	text-transform: uppercase;
	color: #c5c1c0 !important;
	-webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
	/* text-decoration: none;
	padding-inline-start: 0;
	margin-right: 40%;
	color: #c5c1c0; */

	::before {
		content: attr(data-text);
		position: absolute;
		color: var(--clr);
		width: 0;
		overflow: hidden;
		transition: 1s;
		border-right: 8px solid var(--clr);
		-webkit-text-stroke: 1px var(--clr);
	}

	:hover::before {
		width: 100%;
		color: #f7ce3e;
		filter: drop-shadow(0 0 25px var(--clr));
	}
`;

const NavBar = styled.ul`
	position: relative;
	display: flex;
	flex-direction: row;
	gap: 30px;
	background-color: #1a2930;
	padding: 0.5% 0;
	padding-left: 3vw;
	/* display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	background-color: #1a2930;
	padding: 0;
	margin: 0; */
`;

const Item = styled.li`
	position: relative;
	list-style: none;
	/* font-size: 4vh;
	list-style: none;
	margin-right: 3%;
	margin-bottom: 1%; */
`;

export default Navigation;
