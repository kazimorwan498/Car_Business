import { Row, Card, Col } from "react-bootstrap";

export default function ReviewsCard() {
	const Trending = [
		{
			img: "reviewsImg1.png",
			title: "2021 Cadillac Escalade",
			des: "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
			userImg: "reviewsUserImg1.png",
			userName: "Hironaka Hiroe",
			designation: "Chief Editor",
			rate: "4.91",
			rateNum: "98",
		},
		{
			img: "reviewsImg2.png",
			title: "2021 Hyundai Elantra",
			des: "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra.",
			userImg: "reviewsUserImg2.png",
			userName: "Debashis Bhuiyan",
			designation: "News Editor",
			rate: "4.65",
			rateNum: "93",
		},
		{
			img: "reviewsImg3.png",
			title: "2021 Mercedes-Benz GLA250",
			des: "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain.",
			userImg: "reviewsUserImg3.png",
			userName: "Lew Silverton",
			designation: "Chief Editor",
			rate: "4.55",
			rateNum: "35",
		},
	];

	return (
		<>
			<div className="container">
				<h2 className="text-center fw-bold TrendingHeading">
					Recent reviews
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
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text style={{ color: "#9a9ea7" }}>
										{item.des}
									</Card.Text>
									<div className="reviews d-flex gap-3 align-items-center">
										<img
											style={{
												width: "42px",
												height: "42px",
												objectFit: "contain",
											}}
											src={item.userImg}
											alt={item.userImg}
										/>
										<div className="d-flex flex-column flex-grow-1">
											<span className="fw-bold">
												{item.userName}
											</span>
											<span style={{ color: "#9a9ea7" }}>
												{item.designation}
											</span>
										</div>
										<div className="d-flex align-items-center justify-content-center gap-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
												width="18"
												height="18"
											>
												<path
													fill="#ef8354"
													d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
												/>
											</svg>

											<span className="fw-bold">
												{item.rate}
											</span>
											<span style={{ color: "#9a9ea7" }}>
												({item.rateNum})
											</span>
										</div>
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
