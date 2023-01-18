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
      <div className="header mb-0">
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
      <div className="why">
        <div className="why-content">
          <h2>{t("header2")}</h2>
          <div className="cards">
            <div className="card px-[55px]">
              <img className=" mx-auto mb-[32px]" src={require('../img/Group.png')} alt="" />
              <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">{t("header2-card1")}</h3>
              <p className=" font-normal text-base leading-[22px] text-[#363636]">{t("header2-disc1")}</p>
            </div>
            <div className="card px-[55px]">
              <img className=" mx-auto mb-[32px]" src={require('../img/users 1.png')} alt="" />
              <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">{t("header2-card2")}</h3>
              <p className=" font-normal text-base leading-[22px] text-[#363636]">{t("header2-disc2")}</p>
            </div>
            <div className="card px-[55px]">
              <img className=" mx-auto mb-[32px]" src={require('../img/trophy 1.png')} alt="" />
              <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">{t("header2-card3")}</h3>
              <p className=" font-normal text-base leading-[22px] text-[#363636]">{t("header2-disc3")}</p>
            </div>
            <div className="card px-[55px]">
              <img className=" mx-auto mb-[32px]" src={require('../img/idea1.png')} alt="" />
              <h3 className=" font-medium text-2xl mb-[11px] leading-[29px] text-[#363636]">{t("header2-card4")}</h3>
              <p className=" font-normal text-base leading-[22px] text-[#363636]">{t("header2-disc4")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container max-w-[1200px] px-[2%] py-[150px] mx-auto">
        <div className=" text-center pb-[80px] text-[#363636] font-bold text-[27px] leading-[40px]">{t("exw-header")}</div>
        <div className=" flex justify-center flex-wrap gap-[20px]">
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require('../img/exw1.png')} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">{t("exw-card-header1")} </div>
            <a className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]" href="!#">{t("exw-card-link")}  <img className=" ml-[17px]" src={require('../img/arrow-right.png')} alt="" /></a>
          </div>
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require('../img/exw2.png')} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">{t("exw-card-header2")} </div>
            <a className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]" href="!#">{t("exw-card-link")} <img className=" ml-[17px]" src={require('../img/arrow-right.png')} alt="" /></a>
          </div>
          <div className=" bg-white py-[50px] px-[36px] max-w-[80%] md:max-w-[48%]  lg:max-w-[32%] w-full rounded-[10px] card-item">
            <img src={require('../img/exw3.png')} alt="" />
            <div className=" text-[22px] text-[#363636] font-medium leading-[29px] mt-[32px]">{t("exw-card-header3")} </div>
            <a className=" flex text-[#1773BA] text-base leading-[22px] mt-[15px]" href="!#">{t("exw-card-link")} <img className=" ml-[17px]" src={require('../img/arrow-right.png')} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
