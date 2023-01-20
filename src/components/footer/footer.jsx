import React from "react";
import { useTranslation } from "react-i18next";
function Footer(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" text-center py-[18px] bg-[#1773ba] text-white text-[14px]">
        {t("footer")}
      </div>
    </div>
  );
}

export default Footer;
