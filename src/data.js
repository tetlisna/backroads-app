import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";


export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#about", text: "about" },
	{ id: 3, href: "#services", text: "services" },
	{ id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
	{ id: 1, href: "https://wwww.twitter.com", icon: "fab fa-twitter" },
	{ id: 2, href: "https://www.twitter.com", icon: "fab fa-facebook" },
	{ id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
export const services = [
	{
		id: 1,
		title: "saving money",
		icon: "fas fa-wallet fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, official",
	},
	{
		id: 2,
		title: "endless hiking",
		icon: "fas fa-tree fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, official",
	},
	{
		id: 3,
		title: "amazing comfort",
		icon: "fas fa-socks fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, official",
	},
];
export const tours = [
	{
		id: 1,
		title: "tibet adventure",
		image: tour1,
        date: "august 1th, 2020",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		duration: 6,
        location: "china",
		cost: "2100",
	},
    {
		id: 2,
		title: "best of java",
		image: tour2,
        date: "august 1th, 2019",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		duration: 11,
        location: "china",
		cost: "1400",
	},
    {
		id: 3,
		title: "explore hong kong",
		image: tour3,
        date: "september 15th, 2020",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		duration: 6,
        location: "hong kong",
		cost: "5000",
	},
    {
		id: 4,
		title: "kenya highlights",
		image: tour4,
        date: "august 1th, 2020",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		duration: 6,
        location: "kenya",
		cost: "3300",
	},
    
];
