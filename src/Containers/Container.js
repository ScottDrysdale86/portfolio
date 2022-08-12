import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Components/Navigation";
import MainPage from "../Components/MainPage";
import Footer from "../Components/Footer.js";
import About from "../Components/About";
import Projects from "../Components/Projects";

const Container = () => {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/About" element={<About />}></Route>
				<Route path="/Projects" element={<Projects />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default Container;
