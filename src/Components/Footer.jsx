export default function Footer() {
	return (
		<footer className="container Footer-Section">
			<div>
				<div className="d-flex gap-3 align-items-center justify-content-center">
					<span className="fw-bold">Privacy Policy</span>
					<span className="fw-bold">Term of Use</span>
					<span style={{ color: "#9a9ea7" }}>
						&copy; {new Date().getFullYear()} All rights reserved
					</span>
				</div>
				<div className="d-flex gap-4 align-items-center justify-content-center">
					<div className="d-flex align-items-center justify-content-center gap-2">
						<img src="globe.png" alt="globe.png" />
						<span style={{ color: "#9a9ea7" }}>English</span>
					</div>
					<div className="d-flex align-items-center justify-content-center gap-2">
						<img src="dotMenu.png" alt="dotMenu.png" />
						<span style={{ color: "#9a9ea7" }}>USD</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
