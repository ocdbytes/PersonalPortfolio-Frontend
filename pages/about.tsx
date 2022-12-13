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
          content="Software Engineer Intern @kanalabs | CTF Player ☠️ | Blockchain ⛓️ | Full Stack Developer 💻 | ♥️ hardware 📟 | Ex-FSWD Intern @Zapezzy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutComponent />
    </div>
  );
};

export default About;
