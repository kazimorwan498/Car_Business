import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FilterAndSearch from "./Components/Filter";

function App() {
	return (
		<>
			<section style={{ maxWidth: "1500px", marginInline: "auto" }}>
				<NavBar />
				<Hero />
				<FilterAndSearch />
			</section>
		</>
	);
}

export default App;
