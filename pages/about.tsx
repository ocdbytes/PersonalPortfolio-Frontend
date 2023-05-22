import Head from "next/head";
import React from "react";
import AboutComponent from "../components/AboutComponent";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Arun Jangra</title>
        <meta
          name="description"
          content="CTF Player ☠️ | Blockchain Dev ⛓️ | Software Developer 💻 | ♥️ hardware 📟"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutComponent />
    </div>
  );
};

export default About;
