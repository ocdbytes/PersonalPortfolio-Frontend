import React from "react";
import styles from "../styles/About.module.css";
import Divider from "./Divider";

const AboutComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <h1>About</h1>
      <br></br>
      <p className={styles.limitWidth}>
        I am a highly skilled software developer with experience in Blockchain
        Technology and Web Development for over 2+ years. I have a good
        knowledge of Protocols and System Design. In previous roles, slashed
        downtime by 30% and ensured 98% on-time project completion. I also have
        experience in Agile Software Development. I have worked in Cyber
        Security (1+ year) and have a good knowledge of Operating Systems and
        Low Level Interactions.
      </p>
      <br></br>
      <br></br>
      <Divider />
      <h2>Blockchain 📦</h2>
      <br></br>
      <p className={styles.limitWidth}>
        Full Stack Web3 Developer with knowledge in ethereum architecture.
        Worked on DeFi products and I know the aggregator dynamics. Worked in
        Cross Chain using Wormhole & Layer Zero. I played around with the cross
        chain bridges and crypto vaults.
      </p>
      <br></br>
      <p>Tech Stack :</p>
      <br></br>
      <ul>
        <li>Solidity</li>
        <li>DeFi</li>
        <li>LayerZero</li>
        <li>Wormhole (Layer 0 API)</li>
        <li>Metamask</li>
        <li>Oracles</li>
        <li>Chainlink</li>
      </ul>
      {/* section2 */}
      <br></br>
      <br></br>
      <Divider />
      <h2>Software Development 🖥️</h2>
      <br></br>
      <p className={styles.limitWidth}>
        Worked with microservices and the deployment of the scalable products
        using industry grade platforms. Experienced in Agile Software
        development.
      </p>
      <br></br>
      <p>Tech Stack :</p>
      <br></br>
      <ul>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>GCP</li>
        <li>AWS</li>
        <li>Graphana</li>
        <li>Kafka</li>
      </ul>
      {/* section 3 */}
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
        <li>Heroku</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>Firebase</li>
      </ul>
    </div>
  );
};

export default AboutComponent;
