import Carousel from "react-bootstrap/Carousel";

export default function Hero() {
	return (
		<>
			<Carousel className="mt-5" data-bs-theme="dark" indicators={false}>
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
							src="hero-car.png"
							alt="hero-car.png"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="text-center HeroArea">
						<p className="mt-5">Join your new car</p>
						<h1 className="fw-bold">Toyota CHR My Dream Car</h1>
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
							src="hero-car.png"
							alt="hero-car.png"
						/>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="text-center HeroArea">
						<p className="mt-5">Hire us for your new car</p>
						<h1 className="fw-bold">Ford Civic Type R</h1>
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
							src="hero-car.png"
							alt="hero-car.png"
						/>
					</div>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
