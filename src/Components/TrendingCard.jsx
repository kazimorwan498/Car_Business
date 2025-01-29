import { Row, Button, Card, Col } from "react-bootstrap";

export default function TrendingCard() {
	const Trending = [
		{
			img: "trendingImg-1.png",
			title: "Used 2019 Audi S4 Premium Plus",
			miles: "11 475 Miles",
			transmission: "AWD",
			cylinder: "4-Cylinder Turbo",
			price: "$41,400",
			bestSeller: "Bestseller",
		},
		{
			img: "trendingImg-2.png",
			title: "2013 Subaru Forester Premium Plus",
			miles: "40 475 Miles",
			transmission: "AWD",
			cylinder: "4-Cylinder Turbo",
			price: "$22,500",
			bestSeller: "Bestseller",
		},
		{
			img: "trendingImg-3.png",
			title: "Used 2010 BMW X3 Sport package",
			miles: "20 850 Miles",
			transmission: "RWD",
			cylinder: "4-Cylinder",
			price: "$39,200",
			bestSeller: "Bestseller",
		},
	];

	return (
		<>
			<div className="container">
				<h2 className="text-center fw-bold TrendingHeading">
					Trending near you
				</h2>
				<Row className="d-flex justify-content-center">
					{Trending.map((item, index) => (
						<Col key={index}>
							<Card style={{ width: "25rem", border: "none" }}>
								<Card.Img
									variant="top"
									src={item.img}
									style={{ borderRadius: "0.375rem" }}
								/>
								<Card.Body className="ps-0">
									<Card.Title>{item.title}</Card.Title>
									<Card.Text style={{ color: "#9a9ea7" }}>
										{item.miles}
									</Card.Text>
									<Card.Text style={{ color: "#9a9ea7" }}>
										{item.transmission} • {item.cylinder}
									</Card.Text>
									<div className="d-flex gap-3 CardBtn">
										<Button
											variant="primary"
											className="fw-bold"
										>
											{item.price}
										</Button>
										<Button
											variant="secondary"
											className="fw-bold"
										>
											{item.bestSeller}
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}
