import React from "react";

const achievementsContent = [
	{ title: "1", subTitle1: "year of", subTitle2: "experience" },
	{ title: "81", subTitle1: "completed", subTitle2: "projects" },
	{ title: "10", subTitle1: "technologies", subTitle2: "learned" },
	{ title: "3", subTitle1: "certificates", subTitle2: "awarded" },
];

const Achievements = () => {
	return (
		<div className="row">
			<div className="about-pills-wrapper">
				<div className="text-style-pill bg-green">Python</div>
				<div className="text-style-pill bg-blue">MySQL</div>
				<div className="text-style-pill bg-purple">APIs</div>
				<div className="text-style-pill bg-orange">Python</div>
				<div className="text-style-pill bg-blue">JavaScript</div>
				<div className="text-style-pill bg-green">HTML5</div>
				<div className="text-style-pill bg-orange">CSS</div>
				<div className="text-style-pill bg-green">Bootstrap</div>
				<div className="text-style-pill bg-purple">React</div>
				<div className="text-style-pill bg-orange">NextJS</div>
				<div className="text-style-pill bg-purple">GraphQL</div>
				<div className="text-style-pill bg-blue">Swagger</div>
				<div className="text-style-pill bg-green">PyTest</div>
				<div className="text-style-pill bg-blue">Pandas</div>
				<div className="text-style-pill bg-purple">Vercel</div>
				<div className="text-style-pill bg-orange">Flask</div>
				<div className="text-style-pill bg-green">SQLAlchemy</div>
				<div className="text-style-pill bg-blue">Marshmallow</div>
				<div className="text-style-pill bg-blue">Flask-Caching</div>
				<div className="text-style-pill bg-orange">JWT Authentication</div>
				<div className="text-style-pill bg-purple">SocketIO</div>
			</div>
		</div>
	);
};

export default Achievements;
