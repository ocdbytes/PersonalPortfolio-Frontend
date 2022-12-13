import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <h4 className={styles.addressFooter}>
        0xbe1b7eC9661FE91bb29D0e9341aC834C345bb3d3
      </h4>
      <h4>
        Hey 👋 !! <span className={styles.colored}>Arun Jangra</span> here :)
      </h4>
      <br></br>
      <p className={styles.strip}>Made with ☕ by @w3Ts0ck3T_eth</p>
    </div>
  );
};

export default Footer;
