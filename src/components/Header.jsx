import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import { GiLibertyWing } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion'
import "../styles/header.css";

const Header = () => {
  const [buttonIcon, setButtonIcon] = useState(false);

  const animations = {
    top: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <>
      <header className="header">
        <div className="flex gap">
          <a href="/" className="logo">
            <GiLibertyWing className="logo-svg" />
            <h1 className="logo-h">JOBITE</h1>
          </a>
          <nav>
            <motion.div {...animations.top} className={buttonIcon ? "nav-list mobile-list" : "nav-list"}>
              <li>
                <Link to="/" onClick={() => setButtonIcon(!buttonIcon)}>
                  Find Job
                </Link>
              </li>
              <li>
                <Link
                  to="/companyApplication"
                  onClick={() => setButtonIcon(!buttonIcon)}
                >
                  Company Application
                </Link>
              </li>
              <li>
                <Link
                  to="/companyReviews"
                  onClick={() => setButtonIcon(!buttonIcon)}
                >
                  Company Reviews
                </Link>
              </li>
            </motion.div>
          </nav>
        </div>

        <div className="hr-right">
          <div className="inner-hr-right">
            <div className="select">
              <img
                className="mr"
                src="https://tse1.mm.bing.net/th?id=OIP.negtMnvm6KcK8VhtCm3MzQHaD_&pid=Api&P=0&h=180"
                alt=""
              />
              <select name="nation" id="nation">
                <option value="En">EN</option>
                <option value="Ind">IN</option>
                <option value="USA">UK</option>
              </select>
            </div>
            <AiOutlineBell />
          </div>
          <h2>H</h2>
        </div>

        <div className="nav-button" onClick={() => setButtonIcon(!buttonIcon)}>
          <RxHamburgerMenu className="nav-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
