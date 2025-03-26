import Carousel from "react-bootstrap/Carousel";

export default function Hero() {
	return (
		<>
			<Carousel
				className="mt-5 container"
				data-bs-theme="dark"
				indicators={false}
				style={{ maxWidth: "1500px", marginInline: "auto" }}
			>
				<Carousel.Item>
					<div className="text-center HeroArea">
						<p className="mt-5">Meet your new car</p>
						<h1 className="fw-bold">Honda Civic Type R</h1>
						<div className="HeroButtons">
							<button className="btn btn-outline-secondary fw-bold me-3">
								More Details
							</button>
							<button className="btn btn-primary fw-bold text-light">
								Test Drive
							</button>
						</div>
					</div>
					<div className="HeroImg">
						<img
							className="d-block w-100"
							src="hero-car1.png"
							alt="hero-car1.png"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="text-center HeroArea">
						<p className="mt-5">Join your new car</p>
						<h1 className="fw-bold">2022 Toyota C-HR</h1>
						<div className="HeroButtons">
							<button className="btn btn-outline-secondary fw-bold me-3">
								More Details
							</button>
							<button className="btn btn-primary fw-bold text-light">
								Test Drive
							</button>
						</div>
					</div>
					<div className="HeroImg">
						<img
							className="d-block w-100"
							src="hero-car2.png"
							alt="hero-car2.png"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="text-center HeroArea">
						<p className="mt-5">Hire us for your new car</p>
						<h1 className="fw-bold">2023 Ford Expedition</h1>
						<div className="HeroButtons">
							<button className="btn btn-outline-secondary fw-bold me-3">
								More Details
							</button>
							<button className="btn btn-primary fw-bold text-light">
								Test Drive
							</button>
						</div>
					</div>
					<div className="HeroImg">
						<img
							className="d-block w-100"
							src="hero-car3.png"
							alt="hero-car3.png"
						/>
					</div>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
