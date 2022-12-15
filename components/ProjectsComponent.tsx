import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Blockchain,
  DocsAndTemplates,
  Security,
  WebDevelopment,
} from "../assets/Projects";
import styles from "../styles/Project.module.css";
import Divider from "./Divider";

const ProjectsComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <h1>Projects</h1>
      <br></br>
      <p className={styles.projDesc}>
        Here are some of my projects in different fields & I am happy to share
        them with the community. If you want to contribute in any of them then
        feel free to fork and code.
      </p>
      <br></br>
      <p className={styles.projDesc}>
        You can see all my projects in my github :
      </p>
      <br></br>
      <Link
        href="https://github.com/Arun89-crypto"
        className={styles.projectHeading}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github.png"
          alt="github"
          width="25"
          height="25"
          className={styles.headingImage}
        ></Image>
        Arun89-Crypto
      </Link>
      {/* Blockchain Section */}
      <br></br>
      <br></br>
      <Divider />
      <h2 className={styles.projectHeading}>Blockchain 📦</h2>
      <br></br>
      <div className={styles.projectSection}>
        {Blockchain.map((project) => {
          return (
            <div className={styles.projectCard} key={project.desc}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <p className={styles.ulHead}>Tech stack :</p>
              <ul>
                {project.stack.map((st) => {
                  return <li key={`${st}..${project.name}`}>{st}</li>;
                })}
              </ul>
              <Link
                href={project.link}
                className={styles.linkIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="github"
                  width="25"
                  height="25"
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
      {/* Web Dev Section */}
      <br></br>
      <br></br>
      <Divider />
      <h2 className={styles.projectHeading}>Web Development 🖥️</h2>
      <br></br>
      <div className={styles.projectSection}>
        {WebDevelopment.map((project) => {
          return (
            <div className={styles.projectCard} key={project.desc}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <p className={styles.ulHead}>Tech stack :</p>
              <ul>
                {project.stack.map((st) => {
                  return <li key={`${st}..${project.name}`}>{st}</li>;
                })}
              </ul>
              <Link
                href={project.link}
                className={styles.linkIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="github"
                  width="25"
                  height="25"
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
      {/* Security Section */}
      <br></br>
      <br></br>
      <Divider />
      <h2 className={styles.projectHeading}>Cyber Security 🔐</h2>
      <br></br>
      <div className={styles.projectSection}>
        {Security.map((project) => {
          return (
            <div className={styles.projectCard} key={project.desc}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <p className={styles.ulHead}>Tech stack :</p>
              <ul>
                {project.stack.map((st) => {
                  return <li key={`${st}..${project.name}`}>{st}</li>;
                })}
              </ul>
              <Link
                href={project.link}
                className={styles.linkIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="github"
                  width="25"
                  height="25"
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
      {/* Docs Section */}
      <br></br>
      <br></br>
      <Divider />
      <h2 className={styles.projectHeading}>Docs & Templates 🚀</h2>
      <br></br>
      <div className={styles.projectSection}>
        {DocsAndTemplates.map((project) => {
          return (
            <div className={styles.projectCard} key={project.desc}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <p className={styles.ulHead}>Tech stack :</p>
              <ul>
                {project.stack.map((st) => {
                  return <li key={`${st}..${project.name}`}>{st}</li>;
                })}
              </ul>
              <Link
                href={project.link}
                className={styles.linkIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="github"
                  width="25"
                  height="25"
                ></Image>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
