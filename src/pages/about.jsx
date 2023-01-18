import React from "react";
import "./about.css";
import img from "../img/man.png";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar/Navbar";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="header container mb-0">
        <div className="left">
          <span>{t("zagalovok")}</span>
          <br />
          <h1>{t("header")}</h1>
          <p>{t("header-descrip")}</p>
          <a href="" className="btn">
            {t("header-btn")}
          </a>
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
            <a
              className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]"
              href="!#"
            >
              {t("exw-card-link")}{" "}
              <img
                className=" ml-[17px]"
                src={require("../img/arrow-right.png")}
                alt=""
              />
            </a>
          </div>
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require("../img/exw2.png")} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">
              {t("exw-card-header2")}{" "}
            </div>
            <a
              className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]"
              href="!#"
            >
              {t("exw-card-link")}{" "}
              <img
                className=" ml-[17px]"
                src={require("../img/arrow-right.png")}
                alt=""
              />
            </a>
          </div>
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require("../img/exw3.png")} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">
              {t("exw-card-header3")}{" "}
            </div>
            <a
              className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]"
              href="!#"
            >
              {t("exw-card-link")}{" "}
              <img
                className=" ml-[17px]"
                src={require("../img/arrow-right.png")}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[#1773BA]">
          <div className=" max-w-[1200px] py-[150px] mx-auto container">
            <div className=" text-center text-white text-[27px] font-bold leading-[40px] mb-[80px]">
            {t('Our-clients')}
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
      <div className=" max-w-[1200px] mx-auto container py-[150px]">
        <div className=" text-center mb-[80px] text-[27px] leading-[40px] font-bold">
        {t('discuss')}
        </div>
        <div className=" text-center mb-[66px] text-[22px] leading-[29px] font-medium">
        {t('consultation')} <br />
          {t('consultation2')}
        </div>
        <div className=" gap-y-10 box-shadow items-center flex justify-between flex-wrap bg-white px-[65px] py-[65px] border-[.5px] border-[#EBEDEE]">
          <div className=" w-full lg:w-[45%]">
            <div className=" text-[#363636] text-[16px] leading-[22px] py-[8px]">
            {t('phone')}
            </div>
            <div className=" mb-[8px] h-[0.5px] max-w-[620px] bg-[#363636] w-full"></div>
            <div className=" text-[#363636] text-[16px] leading-[22px] py-[8px]">
            {t('email')}
            </div>
            <div className=" mb-[8px] h-[0.5px] max-w-[620px] bg-[#363636] w-full"></div>
            <div className=" text-[#363636] text-[16px] leading-[22px] py-[8px]">
            {t('address')}
            </div>
            <div className=" mb-[8px] h-[0.5px] max-w-[620px] bg-[#363636] w-full"></div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="">
              <form>
                <label htmlFor="" className=" text-[14px] leading-[16px] ">
                {t('form-name')}
                </label>
                <br />
                <input
                  type="text"
                  className=" px-[19px] sm:px-[24px] my-[8px] md:my-[12px] py-[22px] text-[14px] sm:text-[16px] placeholder:text-[#5B5B5B] bg-[#F3F3F3] rounded-[4px] w-full"
                  placeholder={t('form-name-input')}
                />
                <br />
                <label htmlFor="" className=" text-[14px] leading-[16px] ">
                {t('form-number')}
                </label>
                <br />
                <input
                  type="text"
                  className=" px-[19px] sm:px-[24px] my-[8px] md:my-[12px] py-[22px] text-[14px] sm:text-[16px] placeholder:text-[#5B5B5B] bg-[#F3F3F3] rounded-[4px] w-full"
                  placeholder={t('form-number-input')}
                />
                <br />
                <label htmlFor="" className=" text-[14px] leading-[16px] ">
                {t('form-email')}
                </label>
                <br />
                <input
                  type="text"
                  className=" px-[19px] sm:px-[24px] my-[8px] md:my-[12px] py-[22px] text-[14px] sm:text-[16px] placeholder:text-[#5B5B5B] bg-[#F3F3F3] rounded-[4px] w-full"
                  placeholder={t('form-email-input')}
                />
                <br />
                <div className="bg-[#1773BA] mt-[40px] cursor-pointer border border-[#1773ba] hover:bg-transparent flex justify-center w-full py-[18px] group group-hover:bg-white duration-200">
                  <a href="" className=" group-hover:text-[#1773ba] text-white">
                  {t('form-button')}
                  </a>
                </div>
                <div className="mt-[16px] text-[14px] leading-[20px] text-[#363636]">
                  {t('form-x')}<span className=" text-[#1773ba]">{t('form-l')}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center py-[18px] bg-[#1773ba] text-white text-[14px]">
        {t("footer")}
      </div>
    </div>
  );
};
export default AboutUs;
