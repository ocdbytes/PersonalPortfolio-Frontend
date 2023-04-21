import React from "react";
import { DevsAndMeetups, Professional } from "../assets/Experience";
import styles from "../styles/Experience.module.css";
import Divider from "./Divider";
import ToggleComponent from "./ToggleComponent";

const ExperienceComponent = () => {
  return (
    <div className={styles.mainDiv}>
      <h1>Experience</h1>
      <br></br>
      <p className={styles.limitWidth}>
        These are my professional and other tech experiences which includes
        meetups, hackathons and club events.
      </p>
      <br></br>
      <br></br>
      <Divider />
      <h2>Professional 💼</h2>
      <br></br>
      {Professional.map((experience) => {
        return (
          <div className={styles.ExperienceDiv} key={experience.company}>
            <h3>{experience.company}</h3>
            {experience.exp.map((ex) => {
              return (
                <div
                  className={styles.ExperienceSubdiv}
                  key={`${ex.role}..${ex.timestart}`}
                >
                  <p style={{ display: "flex" }}>
                    <span
                      className={styles.colored}
                      style={{ marginRight: `${ex.present ? "5px" : "0"}` }}
                    >
                      {ex.present && <span>-&gt;</span>}
                    </span>
                    {ex.role}
                  </p>
                  {ex.details && (
                    <ul>
                      {ex.details.map((d) => {
                        return <li key={d}>{d}</li>;
                      })}
                    </ul>
                  )}
                  <p>
                    {ex.timestart} - {ex.timeend}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
      <br></br>
      <br></br>
      <Divider />
      <h2>MeetUps & DevEvents 🎳</h2>
      <br></br>
      {DevsAndMeetups.map((event) => {
        return (
          <ToggleComponent
            heading={event.heading}
            description={event.description}
            tags={event.tags}
            key={event.heading}
          />
        );
      })}
    </div>
  );
};

export default ExperienceComponent;
