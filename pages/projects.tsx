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
          content="Software Engineer Intern @kanalabs | CTF Player ☠️ | Blockchain ⛓️ | Full Stack Developer 💻 | ♥️ hardware 📟 | Ex-FSWD Intern @Zapezzy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProjectsComponent />
    </div>
  );
};

export default Projects;
