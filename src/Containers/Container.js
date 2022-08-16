import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Components/Navigation";
import MainPage from "../Components/MainPage";
import Footer from "../Components/Footer.js";
import About from "../Components/About";
import Projects from "../Components/Projects";

const Container = () => {
	return (
		<Router className="page">
			<Navigation />
			<Routes>
				<Route path="/portfolio" element={<MainPage />}></Route>
				<Route path="/portfolio/About" element={<About />}></Route>
				<Route
					path="/portfolio/Projects"
					element={<Projects />}
				></Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default Container;
