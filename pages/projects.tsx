import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import ProjectsComponent from "../components/ProjectsComponent";
import styles from "../styles/Project.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Arun Jangra</title>
        <meta
          name="description"
          content="CTF Player ☠️ | Blockchain Dev ⛓️ | Software Developer 💻 | ♥️ hardware 📟"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProjectsComponent />
    </div>
  );
};

export default Projects;
