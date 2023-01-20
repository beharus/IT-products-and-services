import React from "react";
import { useTranslation } from "react-i18next";
import Contact from "../components/contact/contact";
import "./cases.css";

function Services(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" bg-[#1773ba] py-[150px]">
        <div className=" container mx-auto max-w-[1200px]">
          <div className=" text-white text-[27px] leading-[40px] font-bold text-center">
            {t("services")}
          </div>
          <div className=" mt-[80px] w-[100%] md:w-[90%] justify-between mx-auto block md:flex flex-wrap bg-white py-[40px] px-[4%] lg:px-[65px] cases-card">
            <div className="">
              <img src={require("../img/services-img1.png")} alt="" />
            </div>
            <div className="">
              <div className=" text-[22px] font-medium mt-[40px] lg:mt-[0] leading-[29px] text-[#363636] pb-[18px]">
                {t("services2")} <br />
                {t("services21")}
              </div>
              <div className="">
                <div className=" flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services3")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services4")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services5")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services6")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services7")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services8")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services9")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services10")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services11")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services12")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services13")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services14")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-[80px] w-[100%] md:w-[90%] justify-between mx-auto flex-col-reverse lg:flex-row flex flex-wrap bg-white py-[40px] px-[4%] lg:px-[65px] cases-card">
            <div className="">
              <div className=" text-[22px] font-medium mt-[40px] lg:mt-[0] leading-[29px] text-[#363636] pb-[18px]">
                Industry competence and expertise <br />
                in business processes
              </div>
              <div className="">
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services15")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services16")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services17")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services18")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services19")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services20")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services22")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services23")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services24")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services25")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services26")}
                    <br />
                    {t("services261")}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img src={require("../img/services-img2.png")} alt="" />
            </div>
          </div>

          <div className=" mt-[80px] w-[100%] md:w-[90%] justify-between mx-auto block md:flex flex-wrap bg-white py-[40px] px-[4%] lg:px-[65px] cases-card">
            <div className="">
              <img src={require("../img/services-img3.png")} alt="" />
            </div>
            <div className="">
              <div className=" text-[22px] font-medium mt-[40px] lg:mt-[0] leading-[29px] text-[#363636] pb-[18px]">
                {t("services27")}
              </div>
              <div className="">
                <div className=" flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services28")}
                  </div>
                </div>
                <div className="flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services29")}
                  </div>
                </div>
                <div className=" flex mt-[20px]">
                  <div className=" mt-[4px] mr-[6px]">
                    <img src={require("../img/double-circles.png")} alt="" />
                  </div>
                  <div className=" text-[18px] font-medium leading-[25px] text-[#363636] ">
                    {t("services30")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
}

export default Services;
