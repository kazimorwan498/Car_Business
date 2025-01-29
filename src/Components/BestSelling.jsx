import { Col, Row } from "react-bootstrap";

export default function BestSelling() {
	const BestSellingItem = [
		{
			img: "sellingLogo1.png",
			name: "Subaru",
			price: "$40k",
		},
		{
			img: "sellingLogo2.png",
			name: "Volkswagen",
			price: "$15k",
		},
		{
			img: "sellingLogo3.png",
			name: "Toyota",
			price: "$27k",
		},
		{
			img: "sellingLogo4.png",
			name: "Mercedes-Benz",
			price: "$60k",
		},
		{
			img: "sellingLogo5.png",
			name: "Hyundai",
			price: "$30k",
		},
		{
			img: "sellingLogo6.png",
			name: "Infiniti",
			price: "$54k",
		},
	];

	return (
		<>
			<div className="container" style={{ paddingTop: "86px" }}>
				<h2 className="text-center fw-bold">
					Explore best selling car makes
				</h2>

				<Row
					className="d-flex justify-content-center"
					style={{ paddingTop: "50px" }}
				>
					{BestSellingItem.map((item, index) => (
						<Col key={index} md={4} className="SellingCard">
							<div className="vw-add">
								<img
									src={item.img}
									alt={item.img}
									className="vw-logo"
								/>

								<div>
									<div className="vw-text">{item.name}</div>
									<div className="vw-price">
										From {item.price}
									</div>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}
