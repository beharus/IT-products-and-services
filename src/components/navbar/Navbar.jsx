import "./style.css";
import React from "react";
import img from "../../img/Логотип интеллектуальны решения.png";
import Languageoption from "./language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div className=" w-full bg-white">
      <div className="navbar max-w-[1200px] mx-auto">
        <Link to="/about">
          <div className="logo">
            <img src={img} alt="" />
          </div>
        </Link>
        <div className="lg items-center flex">
          <ul>
            <li className="flex items-center">
              <Link className="menu-list my-auto" to="/about">
                {t("about")}
              </Link>
            </li>
            <li className="flex items-center">
              <Link className="menu-list my-auto" to="/services">
                {t("services")}
              </Link>
            </li>
            <li className="flex items-center">
              <Link className="menu-list my-auto" to="/cases">
                {t("cases")}
              </Link>
            </li>
            <li className="flex items-center" style={{ marginLeft: "50px" }}>
              <Languageoption onChange={(e) => handleClick(e)} />
            </li>
            <li className="flex items-center">
              <button
                className="btn"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                {t("contact")}
              </button>
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
              <Link className="menu-list" to="/about">
                {t("about")}
              </Link>
            </li>
            <br />
            <li>
              <Link className="menu-list" to="/services">
                {t("services")}
              </Link>
            </li>
            <br />
            <li>
              <Link className="menu-list" to="/cases">
                {t("cases")}
              </Link>
            </li>
            <br />
            <li className="bnt">
              <button
                className="btn-md"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                {t("contact")}
              </button>
            </li>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className=" mt-[40px] mx-auto">
                <h1
                  className=" text-[18px] font-medium text-[#363636] mb-[35px]"
                  id="exampleModalToggleLabel"
                >
                  {t("contact-header2")}
                </h1>
                <h2 className=" mt-[35px] text-[16px] font-normal text-center">
                  {t("contact-header21")}
                  <br /> {t("contact-header22")}
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body mx-[2%]">
                <form>
                  <label htmlFor="" className=" text-[14px] leading-[16px] ">
                    {t("form-name")}
                  </label>
                  <br />
                  <input
                    type="text"
                    className=" px-[19px] sm:px-[24px] my-[8px] md:my-[12px] py-[22px] text-[14px] sm:text-[16px] placeholder:text-[#5B5B5B] bg-[#F3F3F3] rounded-[4px] w-full"
                    placeholder={t("form-name-input")}
                  />
                  <br />
                  <label htmlFor="" className=" text-[14px] leading-[16px] ">
                    {t("form-number")}
                  </label>
                  <br />
                  <input
                    type="text"
                    className=" px-[19px] sm:px-[24px] my-[8px] md:my-[12px] py-[22px] text-[14px] sm:text-[16px] placeholder:text-[#5B5B5B] bg-[#F3F3F3] rounded-[4px] w-full"
                    placeholder={t("form-number-input")}
                  />
                  <br />
                  <label htmlFor="" className=" text-[14px] leading-[16px] ">
                    {t("form-email")}
                  </label>
                  <br />
                  <input
                    type="text"
                    className=" px-[19px] sm:px-[24px] my-[8px] md:my-[12px] py-[22px] text-[14px] sm:text-[16px] placeholder:text-[#5B5B5B] bg-[#F3F3F3] rounded-[4px] w-full"
                    placeholder={t("form-email-input")}
                  />
                </form>
              </div>
              <div className=" mx-[4%] mb-[40px]">
                <button
                  className="btn bg-[#1773BA] mt-[40px] cursor-pointer border hover:text-[#1773ba] text-white border-[#1773ba] hover:bg-transparent flex justify-center w-full py-[18px] hover:bg-white duration-200"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  {t("form-button")}
                </button>

                <div className="mt-[36px] text-[14px] text-center mx-[15%] leading-[20px] text-[#363636]">
                  {t("form-x")}
                  <Link to="/politics-privasy" className=" text-[#1773ba]">
                    {t("form-l")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  className=" w-1/3 mx-auto"
                  src={require("../../img/ic_baseline-done.png")}
                  alt=""
                />
                <h2 className="text-center text-[28px] font-bold my-[30px] text-[#363636]">
                  {t("thanks")}
                </h2>
                <p className=" mb-[30px] text-center">
                  {t("thanks1")} <br />
                  {t("thanks11")}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className=" mx-auto"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  {t("close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
