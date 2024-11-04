import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">address</span>1203 Martin's Creek Blvd Summerville, SC ,
        United States Of America 29485.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email</span>{" "}
        <a href="mailto:steve@mail.com">kelseaconrad14@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">phone</span>{" "}
        <a href="Tel: +216 21 184 010">+1 346 814 6758</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
