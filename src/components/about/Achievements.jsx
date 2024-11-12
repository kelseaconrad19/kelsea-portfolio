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
			<div class="about-pills-wrapper">
				<div class="text-style-pill bg-green">Python</div>
				<div class="text-style-pill bg-blue">MySQL</div>
				<div class="text-style-pill bg-purple">APIs</div>
				<div class="text-style-pill bg-orange">Python</div>
				<div class="text-style-pill bg-blue">JavaScript</div>
				<div class="text-style-pill bg-green">HTML5</div>
				<div class="text-style-pill bg-orange">CSS</div>
				<div class="text-style-pill bg-green">Bootstrap</div>
				<div class="text-style-pill bg-purple">React</div>
				<div class="text-style-pill bg-orange">NextJS</div>
				<div class="text-style-pill bg-purple">GraphQL</div>
				<div class="text-style-pill bg-blue">Swagger</div>
				<div class="text-style-pill bg-green">PyTest</div>
				<div class="text-style-pill bg-blue">Pandas</div>
				<div class="text-style-pill bg-purple">Vercel</div>
				<div class="text-style-pill bg-orange">Flask</div>
				<div class="text-style-pill bg-green">SQLAlchemy</div>
				<div class="text-style-pill bg-blue">Marshmallow</div>
				<div class="text-style-pill bg-blue">Flask-Caching</div>
				<div class="text-style-pill bg-orange">JWT Authentication</div>
				<div class="text-style-pill bg-purple">SocketIO</div>
			</div>
		</div>
	);
};

export default Achievements;
