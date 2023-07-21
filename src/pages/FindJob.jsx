import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { RiMenuUnfoldFill } from "react-icons/ri";
import DoubleRangeSlideBar from "../components/DoubleRangeSlideBar";
import SidebarCardMenu from "../components/SidebarCardMenu";
import { motion } from "framer-motion";
import blue_tick from "../assets/blue-tick.png";
import save from "../assets/save.png";
import "../styles/findJob.css";

const FindJob = () => {
  // Left Box Toggle Function
  const [toggleLeftBox, setToggleLeftBox] = useState(false);
  const leftBoxhandler = () => {
    return setToggleLeftBox(!toggleLeftBox);
  };

  // Sidebar Toggle Function
  const [toggleCard, setToggleCard] = useState(false);
  const toggleSidebar = () => {
    return setToggleCard(!toggleCard);
  };

  // Left Box Animation
  const animations = {
    left: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div className="container">
      {toggleLeftBox ? (
        <motion.div {...animations.left} className="left-box flex-column gap">
          <div className="flex justify-space-between">
            <h4 className="dark">Filter</h4>
            <div
              className="align-center flex close-btn"
              onClick={leftBoxhandler}
            >
              <p>Clear all</p>
              <RxCrossCircled className="ml" />
            </div>
          </div>

          <div className="flex-column gap">
            <h4 className="dark">Location</h4>
            <div className="select-box flex align-center">
              <p>
                <CiLocationOn className="dark" />
              </p>
              <select className="select" name="location" id="location">
                <option value="New York">New York</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
          </div>

          <div className="flex-column gap">
            <h4 className="dark">Availability</h4>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <label htmlFor="">Freelance / Contract</label>
            </div>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <label htmlFor="">Full Time</label>
            </div>
          </div>

          <div className="flex-column gap">
            <h4 className="dark">Jobs You Might Like</h4>
            <div className="flex">
              <input type="radio" id="" name="" value="" />
              <label htmlFor="">Best Matches</label>
            </div>
            <div className="flex">
              <input type="radio" id="" name="" value="" />
              <label htmlFor="">Most Recent</label>
            </div>
            <div className="flex">
              <input type="radio" id="" name="" value="" />
              <label htmlFor="">Saved Jobs</label>
            </div>
          </div>

          <div className="flex-column gap">
            <h4 className="dark">Salary</h4>

            {/* ----------DoubleRangeSlideBar--------- */}
            <DoubleRangeSlideBar />
          </div>

          <div className="flex-column gap">
            <h4 className="dark">Availability</h4>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <div className="justify-space-between full-width">
                <label htmlFor="">Ready Work</label>
                <p className="dark">2340</p>
              </div>
            </div>
          </div>

          <div className="flex-column gap">
            <h4 className="dark">Specialities</h4>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <div className="justify-space-between full-width">
                <label htmlFor="">Geaphic Designer</label>
                <p className="dark">42</p>
              </div>
            </div>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <div className="justify-space-between full-width">
                <label htmlFor="">UI Designer</label>
                <p className="dark">24</p>
              </div>
            </div>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <div className="justify-space-between full-width">
                <label htmlFor="">UX Designer</label>
                <p className="dark">22</p>
              </div>
            </div>
            <div className="flex">
              <input type="checkbox" id="" name="" value="" />
              <div className="justify-space-between full-width">
                <label htmlFor="">WEB Design</label>
                <p className="dark">32</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <RiMenuUnfoldFill
          className="left-box-menu-btn"
          onClick={leftBoxhandler}
        />
      )}

      <div className="right-box">
        <div className="flex full-width gap search-box">
          <input
            className="search-input"
            type="text"
            placeholder="Search by Title, Company or any jobs keyword..."
          />
          <button className="primary-btn flex">
            <CiSearch />
            <p>Find</p>
          </button>
        </div>

        <div className="details-box flex-column gap">
          {/* ----------Cards---------- */}
          <div className="card" onClick={toggleSidebar}>
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
                      <span className="secondary-text">2 Hours ago</span>
                    </h4>
                    <p className="secondary-text">
                      Hourly: $100-$400 - Remote Friendly - Est. Time: 1 to 3
                      months
                    </p>
                  </div>
                </div>
                <img className="save-btn" src={save} alt="" />
              </div>
              <p>
                Looking for an experienced UI/UX designer htmlFor an ongoing
                project. You will work with an existing SCRUM team htmlFor this
                project. The SCRUM team is comprised of consultants in EU and
                Asia, working on a bespoke software development...
              </p>
              <div className="flex-wrap gap">
                <p className="card-options">User Interface Design</p>
                <p className="card-options">Figma</p>
                <p className="card-options">Wireframing</p>
                <p className="card-options">User Experience</p>
                <p className="card-options">Styleguide</p>
                <p className="card-options">Prototyping</p>
                <p className="card-options">+3 more</p>
              </div>
              <div className="flex gap">
                <span className="varified-text flex">
                  <img src={blue_tick} alt="" />
                  <p className="secondary-text">Payment Varified</p>
                </span>
                <div className="flex">
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                </div>
                <p className="secondary-text">
                  <FaLocationDot /> New York, Manhattan
                </p>
              </div>
            </div>
          </div>

          {/* ----------Sidebar---------- */}
          {toggleCard ? <SidebarCardMenu /> : null}

          <div className="card">
            <div className="flex-column gap">
              <div className="justify-space-between">
                <div className="flex gap">
                  <img
                    className="card-icon"
                    src="https://tse4.mm.bing.net/th?id=OIP.8OMFA9whxc7CqD12FW9D9QHaFj&pid=Api&P=0&h=180"
                    alt=""
                  />
                  <div className="card-heading">
                    <h4 className="mb">
                      Looking for a Graphic Designer.
                      <span className="secondary-text">2 Hours ago</span>
                    </h4>
                    <p className="secondary-text">
                      Hourly: $300-$800 - Remote Friendly - Est. Time: 1 to 3
                      months, Less than 30hrs/week.
                    </p>
                  </div>
                </div>
                <img className="save-btn" src={save} alt="" />
              </div>
              <p>
                We are a direct-to-consumer saas company looking to improve and
                optimize our checkout experience. We need a designer to develop
                variations of flows that optimize conversion and retention.
              </p>
              <div className="flex-wrap gap">
                <p className="card-options">User Interface</p>
                <p className="card-options">User Experience</p>
                <p className="card-options">Web Design</p>
                <p className="card-options">Human-Centered Design</p>
                <p className="card-options">Figma</p>
                <p className="card-options">Wireframing</p>
              </div>
              <div className="flex gap">
                <span className="varified-text flex">
                  <img src={blue_tick} alt="" />
                  <p className="secondary-text">Payment Varified</p>
                </span>
                <div className="flex">
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                </div>
                <p className="secondary-text">
                  <FaLocationDot /> New York, Brooklyn
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex-column gap">
              <div className="justify-space-between">
                <div className="flex gap">
                  <img
                    className="card-icon"
                    src="https://tse1.mm.bing.net/th?id=OIP.JHNv8_KED3aUaFTaR2itFQHaHa&pid=Api&P=0&h=180"
                    alt=""
                  />
                  <div className="card-heading">
                    <h4 className="mb">
                      Saas Platforn Graphic Designer.
                      <span className="secondary-text">2 Hours ago</span>
                    </h4>
                    <p className="secondary-text">
                      Hourly: $100-$700 - Remote Friendly - Est. Time: 1 to 3
                      months, Less than 30hrs/week.
                    </p>
                  </div>
                </div>
                <img className="save-btn" src={save} alt="" />
              </div>
              <p>
                We are a direct-to-consumer saas company looking to improve and
                optimize our checkout experience. We need a designer to develop
                variations of flows that optimize conversion and retention.
              </p>
              <div className="flex-wrap gap">
                <p className="card-options">User Interface</p>
                <p className="card-options">User Experience</p>
                <p className="card-options">Web Design</p>
                <p className="card-options">Human-Centered Design</p>
                <p className="card-options">Figma</p>
                <p className="card-options">Wireframing</p>
              </div>
              <div className="flex gap">
                <span className="varified-text flex">
                  <img src={blue_tick} alt="" />
                  <p className="secondary-text">Payment Varified</p>
                </span>
                <div className="flex">
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                  <span className="fa fa-star checked">
                    <AiFillStar />
                  </span>
                </div>
                <p className="secondary-text">
                  <FaLocationDot /> New York, Brooklyn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
