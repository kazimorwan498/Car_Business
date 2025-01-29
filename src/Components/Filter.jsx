const Type = () => (
	<div className="d-flex justify-content-center align-items-center">
		<label>
			<span className="fw-normal text-start filter-search-label">
				Type
			</span>
			<select className="form-select fw-bold fs-6 filter-search-select">
				<option className="fw-bold fs-6">Used Car</option>
				<option className="fw-bold fs-6">New Car</option>
				<option className="fw-bold fs-6">Vangari Car</option>
			</select>
		</label>
		<div className="vertical-line"></div>
	</div>
);

const Make = () => (
	<div className="d-flex justify-content-center align-items-center">
		<label>
			<span className="fw-normal text-start filter-search-label">
				Make
			</span>
			<select className="form-select fw-bold filter-search-select">
				<option className="fw-bold fs-6" selected>
					Infiniti
				</option>
				<option className="fw-bold fs-6" value="1">
					One
				</option>
				<option className="fw-bold fs-6" value="2">
					Two
				</option>
				<option className="fw-bold fs-6" value="3">
					Three
				</option>
			</select>
		</label>
		<div className="vertical-line"></div>
	</div>
);

const Year = () => (
	<div className="d-flex justify-content-center align-items-center">
		<label>
			<select className="form-select outline-none fw-bold fs-6 filter-search-select">
				<option className="fw-bold fs-6">Year</option>
				<option className="fw-bold fs-6" value="">
					2000
				</option>
				<option className="fw-bold fs-6" value="">
					2005
				</option>
				<option className="fw-bold fs-6" value="">
					2010
				</option>
				<option className="fw-bold fs-6" value="">
					2025
				</option>
			</select>
		</label>
		<div className="vertical-line"></div>
	</div>
);

const Model = () => (
	<div className="d-flex justify-content-center align-items-center">
		<label>
			<select className="form-select outline-none fw-bold fs-6 filter-search-select">
				<option className="fw-bold fs-6">Model</option>
				<option className="fw-bold fs-6" value="">
					BMW XM
				</option>
				<option className="fw-bold fs-6" value="">
					BMW X7
				</option>
				<option className="fw-bold fs-6" value="">
					BMW X6
				</option>
			</select>
		</label>
		<div className="vertical-line"></div>
	</div>
);

const Price = () => (
	<div className="d-flex justify-content-center align-items-center">
		<label>
			<select className="form-select outline-none fw-bold fs-6 filter-search-select">
				<option className="fw-bold fs-6">Price</option>
				<option className="fw-bold fs-6" value="">
					$20000
				</option>
				<option className="fw-bold fs-6" value="">
					$40000
				</option>
				<option className="fw-bold fs-6" value="">
					$80000
				</option>
			</select>
		</label>
	</div>
);

export default function FilterAndSearch() {
	return (
		<>
			<section>
				<h3 className="text-center fw-bold fs-2 filter-search-section-title">
					Which vehicles you are looking for?
				</h3>
				<div className="d-flex justify-content-center align-items-center gap-3 filter-search-box">
					<Type />
					<Make />
					<Year />
					<Model />
					<Price />

					<button className="btn btn-primary search-button d-flex align-items-center justify-content-center">
						<i className="bi bi-search me-2"></i>
						Search
					</button>
				</div>
			</section>
		</>
	);
}
