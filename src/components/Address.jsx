import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">address</span>Summerville, SC , United States Of America.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email</span>{" "}
        <a href="mailto:kelseaconrad14@gmail.com">kelseaconrad14@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

    </>
  );
};

export default Address;
