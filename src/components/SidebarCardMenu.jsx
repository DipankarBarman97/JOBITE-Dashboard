import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsLaptopFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import save from "../assets/save.png";
import blue_tick from "../assets/blue-tick.png";
import "../styles/findJob.css";

const SidebarCardMenu = () => {
  const animations = {
    right: {
      initial: {
        x: "+100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  const [toggleCard, setToggleCard] = useState(true);
  const toggleSidebar = () => {
    return setToggleCard(!toggleCard);
  };

  return (
    <>
      {toggleCard ? (
        <motion.div
          {...animations.right}
          className="sidebar-menu"
        >
          <div className="sidebar-close-btn mb">
            <GrClose onClick={toggleSidebar}/>
          </div>
          <div className="flex-column gap">
            <div className="justify-space-between">
              <div className="flex gap">
                <img
                  className="card-icon"
                  src="https://tse2.mm.bing.net/th?id=OIP.-uARX3XVkByvB1ak1g750AHaFj&pid=Api&P=0&h=180"
                  alt=""
                />
                <div className="card-heading">
                  <h4 className="mb">
                    Create Figma Design htmlFor Web Application.
                  </h4>
                  <p className="secondary-text">
                    <FaLocationDot /> New York, Manhattan. 2Hours ago
                  </p>
                </div>
              </div>
              <img className="save-btn" src={save} alt="" />
            </div>

            <div className="justify-space-between gap">
              <div className="sidebar-box">
                <div className="flex gap">
                  <BiSolidDollarCircle />
                  <div className="flex-column">
                    <h4>
                      $100-400 <span>/ hours</span>
                    </h4>
                    <p className="secondary-text">Avg. salary</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-box">
                <div className="flex gap">
                  <BsLaptopFill />
                  <div className="flex-column">
                    <h4>Remote Friendly</h4>
                    <p className="secondary-text">Job Type</p>
                  </div>
                </div>
              </div>
            </div>

            <h4>About the job</h4>
            <p>
              Looking for an experienced UI/UX designer htmlFor an ongoing
              project. You will work with an existing SCRUM team htmlFor this
              project. The SCRUM team is comprised of consultants in EU and
              Asia, working on a bespoke software development project for a
              client. Your role in the project will be to design user interfaces
              in Figma together with the product owner. Your first task will be
              to create a design for a new web application that displayes
              environmental data as maps and graphs.
            </p>
            <h4>Required Experience:</h4>
            <div className="flex-column gap">
              <span className="flex">
                <img className="tick" src={blue_tick} alt="" />
                <p>Figma - and using it "the right way"</p>
              </span>
              <span className="flex">
                <img className="tick" src={blue_tick} alt="" />
                <p>Designing with design systems and design languages.</p>
              </span>
              <span className="flex">
                <img className="tick" src={blue_tick} alt="" />
                <p>
                  Designing for modern web and app development, including
                  progressive and responsive designs.
                </p>
              </span>
              <span className="flex">
                <img className="tick" src={blue_tick} alt="" />
                <p>
                  Develop final designs from conceptual mockups and wireframes.
                </p>
              </span>
            </div>
            <h4>Skills and Expertise :</h4>
            <div className="gap flex-wrap">
              <p className="card-options">User Interface Design</p>
              <p className="card-options">Figma</p>
              <p className="card-options">Wireframing</p>
              <p className="card-options">User Experience</p>
              <p className="card-options">Styleguide</p>
              <p className="card-options">Prototyping</p>
              <p className="card-options">Website</p>
              <p className="card-options">Landing Page</p>
            </div>
          </div>
          <button className="sidebar-btn">Apply for this position</button>
        </motion.div>
      ) : null}
    </>
  );
};

export default SidebarCardMenu;
