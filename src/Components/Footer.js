const Footer = () => {
	return (
		<footer>
			<li>
				<a _blank href="http://www.linkedin.com" target="_blank">
					<img
						width="50px"
						src={require("../images/linked.png")}
						alt="LI logo"
					></img>
				</a>
			</li>
			<li>
				<a href="http://www.github.com/ScottDrysdale86" target="_blank">
					<img
						width="50px"
						src={require("../images/git.png")}
						alt="Git logo"
					></img>
				</a>
			</li>
		</footer>
	);
};

export default Footer;
