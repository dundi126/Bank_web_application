import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer align-center flex-col`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexCenter} flex-col flex-center`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] flex">
          <span className="text-gradient">Get</span>
          <img
            src={arrowUp}
            alt="arrow up"
            className="w-[23px] h-[23px] object-contain"
          />
        </p>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
