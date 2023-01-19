import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
	return (
		<div>
			<section className="section" id="tours">
				<Title title="featured" subtitle="tours" />

				<div className="section-center featured-center">
					{tours.map((tour) => {
						// const { id, title, image, date, info, duration, location, cost } =
						// 	tour;
						return (
							<Tour key={tour.id} {...tour} />
							// <article className="tour-card" key={id}>
							// 	<div className="tour-img-container">
							// 		<img src={image} className="tour-img" alt={title} />
							// 		<p className="tour-date">{date}</p>
							// 	</div>
							// 	<div className="tour-info">
							// 		<div className="tour-title">
							// 			<h4>{title}</h4>
							// 		</div>
							// 		<p>{info}</p>
							// 		<div className="tour-footer">
							// 			<p>
							// 				<span>
							// 					<i className="fas fa-map"></i>
							// 				</span>{" "}
							// 				{location}
							// 			</p>
							// 			<p>{duration} days</p>
							// 			<p>from ${cost}</p>
							// 		</div>
							// 	</div>
							// </article>
						);
					})}
					
				</div>
			</section>
		</div>
	);
};

export default Tours;
