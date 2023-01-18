import "./style.css";
import React from "react";
import img from "../../img/Логотип интеллектуальны решения.png";
import Languageoption from "./language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Navbar(props) {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div className=" w-full bg-white">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="lg">
          <ul>
            <li>
              <a className="menu-list" href="/about">
                {t("about")}
              </a>
            </li>
            <li>
              <a className="menu-list" href="/services">
                {t("services")}
              </a>
            </li>
            <li>
              <a className="menu-list" href="/cases">
                {t("cases")}
              </a>
            </li>
            <li style={{ marginLeft: "50px" }}>
              <Languageoption onChange={(e) => handleClick(e)} />
            </li>
            <li>
              <a className="btn" href="/login">
                {t("contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="md">
          <div
            onClick={() =>
              document.querySelector(".menu").classList.toggle("active")
            }
            className=""
          >
            <i className="fas fa-bars"></i>
          </div>
          <div className="menu">
            <Languageoption onChange={(e) => handleClick(e)} />
            <br />
            <li>
              <a className="menu-list" href="/about">
                {t("about")}
              </a>
            </li>
            <br />
            <li>
              <a className="menu-list" href="/services">
                {t("services")}
              </a>
            </li>
            <br />
            <li>
              <a className="menu-list" href="/cases">
                {t("cases")}
              </a>
            </li>
            <br />
            <li className="bnt">
              <a className="btn-md" href="/login">
                {t("contact")}
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
