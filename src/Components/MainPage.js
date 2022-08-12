const MainPage = () => {
	return (
		<div className="mainPage">
			<img
				className="me"
				width="20%"
				src={require("../images/me.png")}
				alt="Me"
			></img>

			<div className="details">
				<h2> 👋 Hi, I'm Scott</h2>
				<h3> 💻 I'm a junior developer.</h3>
				<h5> 🌍 Based in West Lothian, Scotland</h5>
				<h5> 💭 Student at CodeClan</h5>
				<h5> 🔗 Let's Connect!</h5>
			</div>
		</div>
	);
};

export default MainPage;
