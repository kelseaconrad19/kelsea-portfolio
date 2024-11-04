import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "BACKEND CERTIFICATE",
    institute: "CODING TEMPLE",
    details: `Specialized in backend technologies while gaining a solid foundation in front-end development, focusing on creating scalable, efficient server-side solutions.`,
  },
  {
    year: "2020",
    degree: "MASTER OF ARTS IN TEACHING",
    institute: "LIBERTY UNIVERSITY",
    details: `Equipped me with the skills to communicate complex concepts effectively and nurture learning in others.`,
  },
  {
    year: "2016",
    degree: "BACHELOR OF ARTS",
    institute: "HARDING UNIVERSITY",
    details: `A broad-based education that allowed me to explore diverse fields, fostering a well-rounded perspective.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
