const SocialLink = ({ icon, href, itemClass }) => {
	return (
		<li>
			<a href={href} className={itemClass} target="_blank" rel="noreferrer">
				<i className={icon}></i>
			</a>
		</li>
	);
};

export default SocialLink;
