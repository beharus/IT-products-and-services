import React from "react";
import "./about.css";
import img from "../img/man.png";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/contact";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="header container mb-0">
        <div className="left">
          <span>{t("zagalovok")}</span>
          <br />
          <h1>{t("header")}</h1>
          <p>{t("header-descrip")}</p>
          <button
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
            className="btn"
          >
            {t("header-btn")}
          </button>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
      <div className=" bg-[#1773BA]">
        <div className="why container mx-auto">
          <div className="why-content container">
            <h2>{t("header2")}</h2>
            <div className="cards">
              <div className="card px-[55px]">
                <img
                  className=" mx-auto mb-[32px]"
                  src={require("../img/Group.png")}
                  alt=""
                />
                <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">
                  {t("header2-card1")}
                </h3>
                <p className=" font-normal text-base leading-[22px] text-[#363636]">
                  {t("header2-disc1")}
                </p>
              </div>
              <div className="card px-[55px]">
                <img
                  className=" mx-auto mb-[32px]"
                  src={require("../img/users 1.png")}
                  alt=""
                />
                <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">
                  {t("header2-card2")}
                </h3>
                <p className=" font-normal text-base leading-[22px] text-[#363636]">
                  {t("header2-disc2")}
                </p>
              </div>
              <div className="card px-[55px]">
                <img
                  className=" mx-auto mb-[32px]"
                  src={require("../img/trophy 1.png")}
                  alt=""
                />
                <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">
                  {t("header2-card3")}
                </h3>
                <p className=" font-normal text-base leading-[22px] text-[#363636]">
                  {t("header2-disc3")}
                </p>
              </div>
              <div className="card px-[55px]">
                <img
                  className=" mx-auto mb-[32px]"
                  src={require("../img/idea1.png")}
                  alt=""
                />
                <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">
                  {t("header2-card4")}
                </h3>
                <p className=" font-normal text-base leading-[22px] text-[#363636]">
                  {t("header2-disc4")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container max-w-[1200px] px-[2%] py-[150px] mx-auto">
        <div className=" text-center pb-[80px] text-[#363636] font-bold text-[27px] leading-[40px]">
          {t("exw-header")}
        </div>
        <div className=" flex justify-center flex-wrap gap-[20px]">
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require("../img/exw1.png")} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">
              {t("exw-card-header1")}{" "}
            </div>
            <Link
              className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]"
              to="/cases"
            >
              {t("exw-card-link")}{" "}
              <img
                className=" ml-[17px]"
                src={require("../img/arrow-right.png")}
                alt=""
              />
            </Link>
          </div>
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require("../img/exw2.png")} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">
              {t("exw-card-header2")}{" "}
            </div>
            <Link
              className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]"
              to="/cases"
            >
              {t("exw-card-link")}{" "}
              <img
                className=" ml-[17px]"
                src={require("../img/arrow-right.png")}
                alt=""
              />
            </Link>
          </div>
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require("../img/exw3.png")} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">
              {t("exw-card-header3")}{" "}
            </div>
            <Link
              className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]"
              to="/cases"
            >
              {t("exw-card-link")}{" "}
              <img
                className=" ml-[17px]"
                src={require("../img/arrow-right.png")}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[#1773BA]">
          <div className=" max-w-[1200px] py-[150px] mx-auto container">
            <div className=" text-center text-white text-[27px] font-bold leading-[40px] mb-[80px]">
              {t("Our-clients")}
            </div>
            <div className=" flex justify-center flex-wrap gap-[20px]">
              <div className="">
                <img src={require("../img/sponsor1.png")} alt="" />
              </div>
              <div className="">
                <img src={require("../img/sponsor2.png")} alt="" />
              </div>
              <div className="">
                <img src={require("../img/sponsor3.png")} alt="" />
              </div>
              <div className="">
                <img src={require("../img/sponsor4.png")} alt="" />
              </div>
              <div className="">
                <img src={require("../img/sponsor5.png")} alt="" />
              </div>
              <div className="">
                <img src={require("../img/sponsor4.png")} alt="" />
              </div>
            </div>
          </div>
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
                {t("contact-header")}
              </h1>
              <h2 className=" mt-[35px] text-[16px] font-normal text-center">
                {t("contact-header1")}
                <br /> {t("contact-header11")}
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
                src={require("../img/ic_baseline-done.png")}
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
      <Contact />
    </div>
  );
};
export default AboutUs;
