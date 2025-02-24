import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((e) => (
        <div
          key={e.id}
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={e.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
