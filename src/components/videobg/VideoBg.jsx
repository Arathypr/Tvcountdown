import React, { useState, useEffect, useRef } from "react";
import videoBg from "../../assets/bgvideo1.mp4";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import gelie from "../../assets/gelie.svg";
import tesslois from "../../assets/tesslois.svg";
import zesdro from "../../assets/zesdro.svg";
import metamorphose from "../../assets/metamorphose.svg";

import CountDown from "../countdown/CountDown";

function VideoBg() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="main h-screen relative">
      <div className="video-container h-screen overflow-hidden bg-black"></div>
      <div className="overlay-content absolute inset-0 flex flex-col justify-center items-center text-white z-50">
        <div className="h-full w-full relative overflow-hidden">
          {/* <OrientationMessage /> */}
          <div className="absolute top-48 sm:left-12 font-semibold vvsm:left-7 text-2xl">
            <div className=" text-slate-300  vvsm:-mt-11 vsm:-mt-10 font-Montserrat sm:mt-6">
              A new ERA is loading!!
            </div>
            <div className="font-Montserrat text-white/40  text-base">
              Prepare for an adventure like no other.
            </div>
          </div>
          <div className="absolute left-12 top-32 inset-0 flex justify-start items-center text-white">
            <CountDown countdownTimestampMs={1643673600000} />
          </div>
          {/*metamorphose*/}
          <div className="absolute flex -right-[50%] bottom-[145px]   ">
            <img src={metamorphose} alt="metamorphose" className="w-[48%]" />
          </div>

          {/*social media */}
          <div>
            <div
              className="flex absolute bottom-[78px] right-3 sm:mb-[-25px]"
              style={{ alignItems: "center" }}
            >
              <a
                href="https://in.linkedin.com/company/zesdrotechnologies"
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className={`mr-5 social-icon ${
                    hoveredIcon === "linkedin" ? "opacity-1" : "opacity-0.6"
                  }`}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                onMouseEnter={() => setHoveredIcon("facebook")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className={`mr-5 social-icon ${
                    hoveredIcon === "facebook" ? "opacity-1" : "opacity-0.6"
                  }`}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                onMouseEnter={() => setHoveredIcon("instagram")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className={`mr-5 social-icon ${
                    hoveredIcon === "instagram" ? "opacity-1" : "opacity-0.6"
                  }`}
                />
              </a>
              <a
                href="https://twitter.com/"
                onMouseEnter={() => setHoveredIcon("twitter")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className={`social-icon ${
                    hoveredIcon === "twitter" ? "opacity-1" : "opacity-0.6"
                  }`}
                />
              </a>
            </div>
          </div>
          {/* logo */}
          <div>
            <div className="absolute bottom-24 vvsm:left-8 ssm:left-10 sm:left-[46px] sm:mb-[-25px] flex items-center">
              <div className="text-white font-Montserrat vvsm:text-xs ssm:text-sm sm:text-[10px]">
                <span style={{ fontWeight: "normal" }}>Powered by</span>{" "}
              </div>
            </div>
            <div className="flex justify-start items-start absolute bottom-5 left-[25px] ">
              <div className="ml-5">
                <img src={zesdro} alt="Zesdro" className="h-20 w-20" />
              </div>
              <div className="ml-5">
                <img src={tesslois} alt="Tesslois" className="h-20 w-24" />
              </div>
              <div className="ml-5">
                <img src={gelie} alt="Gelie" className="h-20 w-32" />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoBg;
