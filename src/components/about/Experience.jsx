import React from "react";

const experienceContent = [
  {
    year: "   2024 - Present",
    position: " Trainee",
    compnayName: "Coding Temple",
    details: `  Completed a rigorous bootcamp focused on full-stack development, specializing in backend technologies while also gaining a solid grounding in front-end skills.`,
  },
  {
    year: "2019 - Present",
    position: " English Teacher",
    compnayName: "Dorchester County School District 2, Katy ISD, Memphis City Schools",
    details: `Developed a talent for breaking down complex concepts into digestible lessons, fostering a classroom environment where students could thrive and learn effectively.`,
  },
  {
    year: "2017 - 2019",
    position: "Owner",
    compnayName: "Finally Creative",
    details: ` Founded a blog and editing business that introduced me to the world of SEO, content creation, and website design, blending creativity with technical expertise.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
