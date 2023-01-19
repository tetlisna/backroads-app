import { socialLinks } from "../data";
import PageLinks from './PageLinks';

const Footer = () => {
	return (
		<div>
			<footer className="section footer">
                <PageLinks parentClass="footer-links" itemClass="footer-link" />
				{/* <ul className="footer-links">
					{pageLinks.map((link) => {
						const { id, href, text } = link;
						return (
							<li key={id}>
								<a href={href} className="footer-link" target="_blank">
									{text}
								</a>
							</li>
						);
					})}
				</ul> */}
				<ul className="footer-icons">
					{socialLinks.map((link) => {
						const { id, href, icon } = link;
						return (
							<li key={id} target="_blank">
								<a
									href={href}
									className="footer-icon"
									rel="noreferrer"
									target="_blank"
								>
									<i className={icon}></i>
								</a>
							</li>
						);
					})}
				</ul>
				<p className="copyright">
					copyright &copy; Backroads travel tours company
					<span id="date">{new Date().getFullYear()}</span> all rights reserved
				</p>
			</footer>
		</div>
	);
};

export default Footer;
