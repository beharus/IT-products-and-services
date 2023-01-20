import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/contact/contact";

const Cases = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div>
      <div className="bg-[#1773ba] py-[150px]">
        <div className=" container mx-auto">
          <div className=" text-white max-w-[1200px] mx-auto font-bold pb-[80px] text-center lg:text-start lg:pb-[21px] text-[27px] leading-[40px]">
            {t("case-mobile")}
          </div>
          <div className=" flex flex-wrap justify-center items-center mx-auto">
            <div className=" w-full lg:w-auto">
              <img
                className=" w-full rounded-3xl mb-[-25px] lg:mb-auto lg:rounded-none"
                src={require("../img/tel-img.png")}
                alt=""
              />
            </div>
            <div className=" w-full lg:w-1/2">
              <div className=" bg-white cases-card p-[65px] rounded-[10px]">
                <div className=" font-medium text-[18px] leading-[25px] text-[#363636] pb-[20px]">
                  {t("case-trend")}
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[15px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-focus")}
                    <br />
                    {t("case-focus2")}
                  </p>
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[15px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-carpes")} <br />
                    {t("case-carpes2")}
                  </p>
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[12px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-tel")}
                  </p>
                </div>
                <div className=" font-medium text-[18px] leading-[25px] text-[#363636] mt-[20px] pb-[20px]">
                  {t("case-secret")}
                </div>
                <div className="">
                  <div className=" flex mb-[12px]">
                    <div className=" w-[12px] h-[12px] rounded-full border-[#1773ba] border-[.5px] my-auto mr-[11px]"></div>
                    <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                      {t("case-loom")}
                    </p>
                  </div>
                  <div className=" font-medium text-[18px] leading-[25px] text-[#363636] mt-[20px] pb-[20px]">
                    {t("case-solo")}
                  </div>
                  <div className="">
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                          {t("case-duo")} <br />
                          {t("case-duo2")}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                          {t("case-floor")}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                          {t("case-square")} <br />
                          {t("case-square2")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1773BA] mt-[40px] cursor-pointer border border-[#1773ba] hover:bg-transparent flex justify-center w-full py-[18px] group group-hover:bg-white duration-200">
                    <a
                      href=""
                      className=" group-hover:text-[#1773ba] text-white"
                    >
                      {t("case-button")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[200px] container mx-auto">
          <div className=" text-white font-bold pb-[80px] mx-auto max-w-[1200px] text-center lg:text-start lg:pb-[21px] text-[27px] leading-[40px]">
            {t("exw-card-header2")}
          </div>
          <div className=" flex flex-wrap justify-center items-center mx-auto">
            <div className=" w-full lg:w-auto">
              <img
                className=" w-full rounded-3xl mb-[-25px] lg:mb-auto lg:rounded-none"
                src={require("../img/tel-img2.png")}
                alt=""
              />
            </div>
            <div className=" w-full lg:w-1/2">
              <div className=" bg-white cases-card p-[65px] rounded-[10px]">
                <div className=" font-medium text-[18px] leading-[25px] text-[#363636] pb-[20px]">
                  {t("case-trend")}
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[15px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-bas")}
                  </p>
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[15px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-bas1")}
                  </p>
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[12px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-bas2")}
                  </p>
                </div>
                <div className=" font-medium text-[18px] leading-[25px] text-[#363636] mt-[20px] pb-[20px]">
                  {t("case-secret")}
                </div>
                <div className="">
                  <div className=" flex mb-[12px]">
                    <div className=" w-[12px] h-[12px] rounded-full border-[#1773ba] border-[.5px] my-auto mr-[11px]"></div>
                    <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                      {t("case-bas5")}
                      <br />
                      {t("case-bas51")}
                      <br />
                      {t("case-bas52")}
                    </p>
                  </div>
                  <div className=" font-medium text-[18px] leading-[25px] text-[#363636] mt-[20px] pb-[20px]">
                    {t("case-solo")}
                  </div>
                  <div className="">
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                          {t("case-bas7")}
                          <br />
                          {t("case-bas71")}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                          {t("case-square")}
                          <br />
                          {t("case-square2")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1773BA] mt-[40px] cursor-pointer border border-[#1773ba] hover:bg-transparent flex justify-center w-full py-[18px] group group-hover:bg-white duration-200">
                    <a
                      href=""
                      className=" group-hover:text-[#1773ba] text-white"
                    >
                      {t("form-button")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[200px] container mx-auto">
          <div className=" text-white font-bold pb-[80px] mx-auto max-w-[1200px] text-center lg:text-start lg:pb-[21px] text-[27px] leading-[40px]">
            {t("exw-card-header3")}
          </div>
          <div className=" flex flex-wrap justify-center items-center mx-auto">
            <div className=" w-full lg:w-auto">
              <img
                className=" w-full rounded-3xl mb-[-25px] lg:mb-auto lg:rounded-none"
                src={require("../img/tel-img3.png")}
                alt=""
              />
            </div>
            <div className=" w-full lg:w-1/2">
              <div className=" bg-white cases-card p-[65px] rounded-[10px]">
                <div className=" font-medium text-[18px] leading-[25px] text-[#363636] pb-[20px]">
                  {t("case-trend")}
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[15px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                  {t("case-bas8")}

                  </p>
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[15px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                  {t("case-bas91")}

                  </p>
                </div>
                <div className=" flex mb-[12px]">
                  <img
                    className=" mt-[12px] h-[1.5px] mr-[11px]"
                    src={require("../img/line.png")}
                    alt=""
                  />
                  <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                  {t("case-bas9")}

                  </p>
                </div>
                <div className=" font-medium text-[18px] leading-[25px] text-[#363636] mt-[20px] pb-[20px]">
                  {t("case-secret")}
                </div>
                <div className="">
                  <div className=" flex mb-[12px]">
                    <div className=" w-[12px] h-[12px] rounded-full border-[#1773ba] border-[.5px] my-auto mr-[11px]"></div>
                    <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                    {t("case-bas10")}
 <br />
 {t("case-bas101")}

                    </p>
                  </div>
                  <div className=" font-medium text-[18px] leading-[25px] text-[#363636] mt-[20px] pb-[20px]">
                  {t("case-solo")}
                  </div>
                  <div className="">
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                        {t("case-bas11")}

                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                        {t("case-bas12")}

                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                        {t("case-bas13")}

                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                        {t("case-bas14")}

                        </p>
                      </div>
                    </div>
                    <div className="flex mb-[12px]">
                      <div className="">
                        <img src={require("../img/baseline-done.png")} alt="" />
                      </div>
                      <div className="">
                        <p className=" text-[16px] font-normal leading-[22px] text-[#363636]">
                        {t("case-bas15")}

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1773BA] mt-[40px] cursor-pointer border border-[#1773ba] hover:bg-transparent flex justify-center w-full py-[18px] group group-hover:bg-white duration-200">
                    <a
                      href=""
                      className=" group-hover:text-[#1773ba] text-white"
                    >
                      {t("form-button")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
export default Cases;
