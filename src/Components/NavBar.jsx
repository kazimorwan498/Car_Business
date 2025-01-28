export default function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a href="#">
						<img src="logo.svg" alt="" />
					</a>
					<button
						className="navbar-toggler"
						data-bs-toggle="collapse"
						data-bs-target="#NavbarToggler"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="NavbarToggler"
					>
						<ul className="navbar-nav ms-auto gap-3 mt-5 mt-lg-0">
							<li className="nav-item">
								<a href="" className="nav-link">
									Used Cars
								</a>
							</li>
							<li className="nav-item">
								<a href="" className="nav-link">
									Auctions
								</a>
							</li>
							<li className="nav-item">
								<a href="" className="nav-link">
									New Cars
								</a>
							</li>
							<li className="nav-item">
								<a href="" className="nav-link">
									Sell Cars
								</a>
							</li>
							<li className="nav-item">
								<a href="" className="nav-link">
									Local Dealers
								</a>
							</li>
							<li className="nav-item">
								<a href="" className="nav-link">
									Support
								</a>
							</li>
							<li className="nav-item NavBar-Button">
								<a href="" className="nav-link text-gray">
									<i className="bi bi-person-fill d-none d-lg-inline"></i>
									<span>Sign Up</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
