import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/profile-img.png";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/profile-img.png",
  heroMobileImage: heroImgMobile,
  heroTitleName: "kelsea conrad",
  heroDesignation: "web developer",
  heroDescriptions: `I'm a Charleston, SC-based creative problem-solver experienced with Python, Flask, JavaScript, and React, building digital magic from pixels and code. I specialize in designing intuitive user interfaces and crafting reliable, scalable backend solutions, always aiming to bridge the gap between creativity and technology. I thrive on making the complex simple and turning big ideas into seamless, human-centered experiences. `,
  heroBtn: "Get to know me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center" style={{
        marginTop: "5%",
      }}>
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
            // width: "30%",
            // height: "80%",
            // marginLeft: "5%",
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font" style={{
              fontSize: "2.9rem",
              fontWeight: "800",
            }}>
              {"I'm"} {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
