import React from "react";
import styles from "../styles/Graphic.module.css";
import Image from "next/image";
const MainScreenGraphic = () => {
  return (
    <div
      className={styles.graphicMain}
      style={{ background: "url('/Amazer.gif')", backgroundSize: "cover" }}
    >
      {/* <div className={styles.sq1}>
        <p>0xEC176BE331a3b9ce8ECC4B8F25D05E912a545cc1</p>
      </div>
      <div className={styles.sq2}></div>
      <div className={styles.sq3}></div>
      <div className={styles.sq4}>
        <Image src="/polygon.png" alt="polygon" width="50" height="44"></Image>
      </div>
      <div className={styles.sq5}></div>
      <div className={styles.sq6}></div>
      <div className={styles.sq7}>
        <Image
          src="/chainlink.png"
          alt="chainlink"
          width="45"
          height="52"
        ></Image>
      </div> */}
      {/* <Image
        src={"/Amazer.gif"}
        alt="giffy"
        width={"650"}
        height={"500"}
        style={{
          objectFit: "contain",
        }} */}
      {/* /> */}
    </div>
  );
};

export default MainScreenGraphic;
