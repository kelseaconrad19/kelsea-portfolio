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
				<div class="text-style-pill bg-green">JavaScript</div>
				<div class="text-style-pill bg-blue">HTML5</div>
				<div class="text-style-pill bg-purple">CSS</div>
				<div class="text-style-pill bg-orange">Bootstrap</div>
				<div class="text-style-pill bg-green">React</div>
				<div class="text-style-pill bg-blue">NextJS</div>
				<div class="text-style-pill bg-purple">GraphQL</div>
				<div class="text-style-pill bg-orange">Swagger</div>
				<div class="text-style-pill bg-green">PyTest</div>
				<div class="text-style-pill bg-blue">Pandas</div>
				<div class="text-style-pill bg-purple">Vercel</div>
				<div class="text-style-pill bg-orange">Flask</div>
				<div class="text-style-pill bg-green">SQLAlchemy</div>
				<div class="text-style-pill bg-blue">Marshmallow</div>
				<div class="text-style-pill bg-purple">Flask-Caching</div>
				<div class="text-style-pill bg-orange">JWT Authentication</div>
				<div class="text-style-pill bg-green">SocketIO</div>
			</div>
		</div>
	);
};

export default Achievements;
