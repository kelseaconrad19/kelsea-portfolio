import PokeAPI from "../../../public/assets/img/portfolio/pokeapi.png";
import GRNLITEHOME from "../../../public/assets/img/portfolio/grnlite-home.png";
import GRNLITEDB from "../../../public/assets/img/portfolio/grnlite-db.png";
import Image2 from "../../../public/assets/img/portfolio/sidequests.png";
import Image3 from "../../../public/assets/img/portfolio/ecomm1.png";

const PortfolioData = [
	{
	id: 1,
		type: "GRNLITE Capstone Project",
		image: GRNLITEHOME,
		tag: ["fullstack"],
		description:
			"A web application that connects authors with beta readers to facilitate collaboration on writing projects. Authors can create projects, upload manuscripts, and request feedback from beta readers, who can provide comments and suggestions about the text.",
		techUsed:
			"Technology: Using Django, Python, Javascript, HTML, and CSS, my team and I created a responsive platform that allows authors and beta readers to connect and collaborate on writing projects.",
		skillsRequired:
			"Skills: This project reflects my ability to design and implement a full-stack application that meets the needs of both authors and beta readers.",
		mainTech: ["Django", "CSS", "Javascript"],
		delayAnimation: "0",
		modalDetails: [
			{
				project: "GRNLITE Capstone Project",
				client: "Coding Temple",
				language: "HTML, CSS, Javascript",
				preview: "GRNLITE Capstone Project",
				link: "",
				description:
					"A web application that connects authors with beta readers to facilitate collaboration on writing projects. Authors can create projects, upload manuscripts, and request feedback from beta readers, who can provide comments and suggestions about the text.",
				techUsed:
					"Technology: Using Django, Python, Javascript, HTML, and CSS, my team and I created a responsive platform that allows authors and beta readers to connect and collaborate on writing projects.",
				skillsRequired:
					"Skills: This project reflects my ability to design and implement a full-stack application that meets the needs of both authors and beta readers.",
				mainTech: ["Django", "CSS", "Javascript"],
			},
		],
	},
	{
		id: 2,
		type: "PokeAPI Project",
		image: PokeAPI,
		tag: ["frontend"],
		description:
			"A web application that integrates with the PokeAPI to provide users with an immersive experience in the world of Pokémon. The site allows users to search for Pokémon by name or ID and view detailed information such as name, ID, weight, height, types displayed as colored pills, base stats shown through progress bars, and images.",
		techUsed:
			"Technology: Using HTML, CSS, Bootstrap, and JavaScript, I created a responsive and interactive platform that showcases my skills in front-end development and API integration.",
		skillsRequired:
			"Skills: This project reflects my ability to transform complex data into accessible and visually appealing web interfaces.",
		mainTech: ["HTML", "CSS", "Javascript"],
		delayAnimation: "0",
		modalDetails: [
			{
				project: "Pokemon Search Engine",
				client: "Coding Temple",
				language: "HTML, CSS, Javascript",
				preview: "PokeAPISite",
				link: "https://kelseaconrad19.github.io/PokeAPISite/",
				description:
					"A web application that integrates with the PokeAPI to provide users with an immersive experience in the world of Pokémon. The site allows users to search for Pokémon by name or ID and view detailed information such as name, ID, weight, height, types displayed as colored pills, base stats shown through progress bars, and images.",
				techUsed:
					"Technology: Using HTML, CSS, Bootstrap, and JavaScript, I created a responsive and interactive platform that showcases my skills in front-end development and API integration.",
				skillsRequired:
					"Skills: This project reflects my ability to transform complex data into accessible and visually appealing web interfaces.",
				mainTech: ["HTML", "CSS", "Javascript"],
			},
		],
	},
	{
		id: 3,
		type: "SideQuests Project",
		image: Image2,
		tag: ["frontend"],
		description:
			'A web application that gamifies task management to enhance productivity and engagement. The site allows users to track tasks and goals, earn rewards for completing "quests" and collaborate with others on challenges. By incorporating elements like achievements and team missions, SideQuests turns mundane tasks into exciting missions.',
		techUsed:
			"Using HTML, CSS, and Bootstrap, I designed an interactive platform where users can transform their to-do lists into epic adventures.",
		skillsRequired:
			"This project reflects my skills in front-end development and user experience design.",
		mainTech: ["HTML", "CSS", "Bootstrap"],
		delayAnimation: "100",
		modalDetails: [
			{
				project: "SideQuests",
				client: "Coding Temple",
				language: "HTML, CSS, Bootstrap",
				preview: "SideQuests",
				link: "https://kelseaconrad19.github.io/final-task-app/",
				description:
					'A web application that gamifies task management to enhance productivity and engagement. The site allows users to track tasks and goals, earn rewards for completing "quests" and collaborate with others on challenges. By incorporating elements like achievements and team missions, SideQuests turns mundane tasks into exciting missions.',
				techUsed:
					"Using HTML, CSS, and Bootstrap, I designed an interactive platform where users can transform their to-do lists into epic adventures.",
				skillsRequired:
					"This project reflects my skills in front-end development and user experience design.",
				mainTech: ["HTML", "CSS", "Bootstrap"],
			},
		],
	},
	{
		id: 4,
		type: "Ecommerce Project",
		image: Image3,
		tag: ["backend"],
		description:
			"An eCommerce API that efficiently manages customers, products, orders, and authentication for a seamless online shopping experience. It offers comprehensive CRUD operations for customers and products, enabling detailed management of customer information and product inventory. The API also facilitates order creation and retrieval, with performance enhancements like caching via Flask-Caching and rate limiting using Flask-Limiter. Detailed API documentation is available through Swagger UI, and data validation is handled with Marshmallow schemas.",
		techUsed:
			"Built using Flask and SQLAlchemy, the API ensures secure user authentication through JWT tokens with role-based access control.",
		skillsRequired:
			"This project showcases my expertise in backend development, API design, security implementation, and performance optimization.",
		mainTech: ["Python", "API", "Flask"],
		delayAnimation: "200",
		modalDetails: [
			{
				project: "Ecommerce Site",
				client: "Coding Temple",
				language: " Python",
				preview: "ECommProject",
				link: "https://github.com/kelseaconrad19/ECommProject",
				description:
					"An eCommerce API that efficiently manages customers, products, orders, and authentication for a seamless online shopping experience. It offers comprehensive CRUD operations for customers and products, enabling detailed management of customer information and product inventory. The API also facilitates order creation and retrieval, with performance enhancements like caching via Flask-Caching and rate limiting using Flask-Limiter. Detailed API documentation is available through Swagger UI, and data validation is handled with Marshmallow schemas.",
				techUsed:
					"Built using Flask and SQLAlchemy, the API ensures secure user authentication through JWT tokens with role-based access control.",
				skillsRequired:
					"This project showcases my expertise in backend development, API design, security implementation, and performance optimization.",
				mainTech: ["Python", "API", "Flask"],
			},
		],
	},
	// {
	//   id: 4,
	//   type: "local project",
	//   image: Image4,
	//   tag: ["logo", "video"],
	//   delayAnimation: "0",
	//   modalDetails: [
	//     {
	//       project: "video",
	//       client: "Videohive",
	//       language: " Adobe After Effects",
	//       preview: "www.videohive.net",
	//       link: "https://www.videohive.net",
	//     },
	//   ],
	// },
	// {
	//   id: 5,
	//   type: "saas project",
	//   image: Image5,
	//   tag: ["logo"],
	//   delayAnimation: "100",
	//   modalDetails: [
	//     {
	//       project: "Web Application",
	//       client: "Themeforest",
	//       language: "HTML, CSS, ReactJS",
	//       preview: "www.envato.com",
	//       link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
	//     },
	//   ],
	// },
	// {
	//   id: 6,
	//   type: "mockup project",
	//   image: Image6,
	//   tag: ["logo", "mockup"],
	//   delayAnimation: "200",
	//   modalDetails: [
	//     {
	//       project: "Website",
	//       client: "Themeforest",
	//       language: "HTML, CSS, Javascript",
	//       preview: "www.pexels.com",
	//       link: "https://www.pexels.com",
	//     },
	//   ],
	// },
	// {
	//   id: 7,
	//   type: "facebook project",
	//   image: Image7,
	//   tag: ["logo"],
	//   delayAnimation: "0",
	//   modalDetails: [
	//     {
	//       project: "Website",
	//       client: "Facebook",
	//       language: "HTML, CSS, Javascript",
	//       preview: "www.facebook.com",
	//       link: "https://www.facebook.com/ibthemes",
	//     },
	//   ],
	// },
	// {
	//   id: 8,
	//   type: "dribble project",
	//   image: Image8,
	//   tag: ["graphic design"],
	//   delayAnimation: "100",
	//   modalDetails: [
	//     {
	//       project: "Website",
	//       client: "Dribbble",
	//       language: "HTML, CSS, Javascript",
	//       preview: "www.dribbble.com",
	//       link: "https://dribbble.com/ib-themes",
	//     },
	//   ],
	// },
	// {
	//   id: 9,
	//   type: "behence project",
	//   image: Image9,
	//   tag: ["graphic design", "mockup"],
	//   delayAnimation: "200",
	//   modalDetails: [
	//     {
	//       project: "Website",
	//       client: "Behance",
	//       language: "HTML, CSS, Javascript",
	//       preview: "www.behance.com",
	//       link: "https://www.behance.net/ib-themes",
	//     },
	//   ],
	// },
];

export default PortfolioData;
