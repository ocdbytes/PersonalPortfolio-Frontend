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
          content="CTF Player ☠️ | Blockchain Dev ⛓️ | Software Developer 💻 | ♥️ hardware 📟"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ExperienceComponent />
    </div>
  );
};

export default Experience;
