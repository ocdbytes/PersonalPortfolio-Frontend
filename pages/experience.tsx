import Head from "next/head";
import React from "react";
import ExperienceComponent from "../components/ExperienceComponent";
import Navbar from "../components/Navbar";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experience | Arun Jangra</title>
        <meta
          name="description"
          content="Software Engineer Intern @kanalabs | CTF Player ☠️ | Blockchain ⛓️ | Full Stack Developer 💻 | ♥️ hardware 📟 | Ex-FSWD Intern @Zapezzy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ExperienceComponent />
    </div>
  );
};

export default Experience;
