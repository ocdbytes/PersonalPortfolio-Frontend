import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerLinks}>
        <Link
          href="https://github.com/Arun89-crypto"
          className={styles.linkImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="github" width="25" height="25"></Image>
        </Link>
        <Link
          href="https://www.linkedin.com/in/arun-jangra-4a94b41b5/"
          className={styles.linkImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin"
            width="25"
            height="25"
          ></Image>
        </Link>
        <Link
          href="https://twitter.com/w3Ts0ck3T_eth"
          className={styles.linkImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter.png"
            alt="twitter"
            width="31"
            height="25"
          ></Image>
        </Link>
      </div>
      <h4 className={styles.addressFooter}>
        0xbe1b7eC9661FE91bb29D0e9341aC834C345bb3d3
      </h4>
      <h4>
        Привет 👋 !! <span className={styles.colored}>Arun Jangra</span> here :)
      </h4>
      <br></br>
      <p className={styles.strip}>Made with ☕ by @w3Ts0ck3T_eth</p>
    </div>
  );
};

export default Footer;
