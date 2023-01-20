import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Contact(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" max-w-[1200px] mx-auto container py-[150px]">
        <div className=" text-center mb-[80px] text-[27px] leading-[40px] font-bold">
          {t("discuss")}
        </div>
        <div className=" text-center mb-[66px] text-[22px] leading-[29px] font-medium">
          {t("consultation")} <br />
          {t("consultation2")}
        </div>
        <div className=" gap-y-10 box-shadow items-center flex justify-between flex-wrap bg-white px-[65px] py-[65px] border-[.5px] border-[#EBEDEE]">
          <div className=" w-full lg:w-[45%]">
            <div className=" text-[#363636] text-[16px] leading-[22px] py-[8px]">
              {t("phone")}
            </div>
            <div className=" mb-[8px] h-[0.5px] max-w-[620px] bg-[#363636] w-full"></div>
            <div className=" text-[#363636] text-[16px] leading-[22px] py-[8px]">
              {t("email")}
            </div>
            <div className=" mb-[8px] h-[0.5px] max-w-[620px] bg-[#363636] w-full"></div>
            <div className=" text-[#363636] text-[16px] leading-[22px] py-[8px]">
              {t("address")}
            </div>
            <div className=" mb-[8px] h-[0.5px] max-w-[620px] bg-[#363636] w-full"></div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="">
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
                <br />
                <div className="bg-[#1773BA] mt-[40px] cursor-pointer border border-[#1773ba] hover:bg-transparent flex justify-center w-full py-[18px] group group-hover:bg-white duration-200">
                  <button
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                    className=" group-hover:text-[#1773ba] text-white"
                  >
                    {t("form-button")}
                  </button>
                </div>
                <div className="mt-[16px] text-[14px] leading-[20px] text-[#363636]">
                  {t("form-x")}
                  <Link to="/politics-privasy" className=" text-[#1773ba]">
                    {t("form-l")}
                  </Link>
                </div>
              </form>
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
                  Спасибо!
                </h2>
                <p className=" mb-[30px] text-center">
                  Ваши данные отправлены, <br />
                  совсем скоро мы с вами свяжемся
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className=" mx-auto"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
