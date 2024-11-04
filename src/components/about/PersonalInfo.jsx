import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kelsea", hasColor: "" },
  { meta: "last name", metaInfo: "Conrad", hasColor: "" },
  { meta: "Age", metaInfo: "31 Years", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Summerville, SC", hasColor: "" },
  { meta: "phone", metaInfo: "+13468146758", hasColor: "" },
  { meta: "LinkedIn", metaInfo: " kelseaconrad1993", hasColor: "" },
  { meta: "Github", metaInfo: "kelseaconrad19", hasColor: "green" },
  { meta: "Email", metaInfo: "kelseaconrad14@gmail.com", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
