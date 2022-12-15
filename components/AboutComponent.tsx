import React from "react";
import styles from "../styles/About.module.css";
import Divider from "./Divider";

const AboutComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <h1>About</h1>
      <br></br>
      <p className={styles.limitWidth}>
        I am a Computer Science Engineering Student currently in 3rd year. I am
        currently working in Web3 and Blockchain. I am attending Web3 and
        Blockchain meetups both online and offline, I have been participating
        actively in hackathons.
      </p>
      <br></br>
      <br></br>
      <Divider />
      <h2>Blockchain 📦</h2>
      <br></br>
      <p className={styles.limitWidth}>
        I am currently improving and learning web 3 technologies, improving
        security in smart contracts using solidity, Working on gasless systems.
        I have been using Chainlink and OpenZappelin APIs to integrate with my
        smart contract to stay updated with new functions in APIs.
      </p>
      <br></br>
      <p>Tech Stack :</p>
      <br></br>
      <ul>
        <li>Solidity</li>
        <li>Ganache</li>
        <li>Hardhat</li>
        <li>Truffle</li>
        <li>OpenSea</li>
        <li>Metamask</li>
        <li>OpenZeppelin</li>
        <li>Chainlink</li>
      </ul>
      {/* section2 */}
      <br></br>
      <br></br>
      <Divider />
      <h2>Web Development 👨‍💻</h2>
      <br></br>
      <p className={styles.limitWidth}>
        I have 1 + year of experience as a web developer and i have been
        developing projects and using my skills in various hackathons and club
        projects and freelancing. I can make the apps from scratch and take them
        to the deployment 🚀.
      </p>
      <br></br>
      <p>Tech Stack :</p>
      <br></br>
      <ul>
        <li>MERN</li>
        <li>T3 stack</li>
        <li>Typescript</li>
        <li>GCP</li>
        <li>AWS</li>
        <li>Heroku</li>
        <li>Firebase</li>
        <li>Heroku</li>
      </ul>
    </div>
  );
};

export default AboutComponent;
