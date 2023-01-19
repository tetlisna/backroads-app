import Title from "./Title";
import { services } from "../data";
import Service from "./Service";
const Services = () => {
	return (
		<div>
			<section className="section services" id="services">
				<Title title="our" subtitle="services" />
				<div className="section-center services-center">
					{services.map((service) => {
						// const { id, title, icon, text } = service;
						return (
							<Service id={service.id} {...service} />
							// <article className="service" key={id}>
							// 	<span className="service-icon">
							// 		<i className={icon}></i>
							// 	</span>
							// 	<div className="service-info">
							// 		<h4 className="service-title">{title}</h4>
							// 		<p className="service-text">{text}</p>
							// 	</div>
							// </article>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Services;
