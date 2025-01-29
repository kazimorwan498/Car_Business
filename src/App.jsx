import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FilterAndSearch from "./Components/Filter";
import TrendingCard from "./Components/TrendingCard";
import BestSelling from "./Components/BestSelling";
import ReviewsCard from "./Components/ReviewsCard";
import FindVehicles from "./Components/FindVehicles";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<FilterAndSearch />
			<TrendingCard />
			<BestSelling />
			<ReviewsCard />
			<FindVehicles />
			<Footer />
		</>
	);
}

export default App;
