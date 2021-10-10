import React, { Component } from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";
import home from "../images/home.png";
import users from "../images/users.png";
import information from "../images/information.png";
import { BiHomeAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsPeople } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
//import calendar from "../images/calendar.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div
          className="pivot_menu glass small0"
          style={{
            position: "fixed",
            top: "0px",
            bottom: "0px",
            width: "80px",

            paddingTop: "30vh",
          }}
        >
          <NavLink to="/coc" className="pivot_button">
            <IconContext.Provider
              value={{
                color: "#08F7FE",
                className: "global-class-name",
                size: "2em",
              }}
            >
              <div>
                <BiHomeAlt />
              </div>
            </IconContext.Provider>

            <span style={{ fontSize: "12px", color: "#fff" }}>Home</span>
          </NavLink>
          <br />
          <br />
          <NavLink to="/speakers" className="pivot_button">
            <IconContext.Provider
              value={{
                color: "#08F7FE",
                className: "global-class-name",
                size: "2em",
              }}
            >
              <div>
                <BsPeople />
              </div>
            </IconContext.Provider>
            <span style={{ fontSize: "12px", color: "#fff" }}>Speakers</span>
          </NavLink>
          <br />
          <br />
          <NavLink to="/faqs" className="pivot_button">
            <IconContext.Provider
              value={{
                color: "#08F7FE",
                className: "global-class-name",
                size: "2em",
              }}
            >
              <div>
                <AiOutlineQuestionCircle />
              </div>
            </IconContext.Provider>

            <span style={{ fontSize: "12px", color: "#fff" }}>FAQs</span>
          </NavLink>
          <br />
          <br />
        </div>

        <div className="bottom_nav large0 medium0">
          <NavLink to="/coc" className="primary_white ta_center">
            <img
              className="def"
              src={home}
              alt="home"
              style={{ height: 45 + "px", width: 45 + "px" }}
            ></img>
          </NavLink>
          <NavLink to="/speakers" className="primary_white ta_center">
            <img
              className="def"
              src={users}
              alt="users"
              style={{ height: 45 + "px", width: 45 + "px" }}
            ></img>
          </NavLink>
          <NavLink to="/faqs" className="primary_white ta_center">
            <img
              className="def"
              src={information}
              alt="information"
              style={{ height: 45 + "px", width: 45 + "px" }}
            ></img>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
