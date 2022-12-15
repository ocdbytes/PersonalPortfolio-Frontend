import React, { FC, useState } from "react";
import styles from "../styles/ToggleComponent.module.css";

interface ToggleCompProps {
  heading: string;
  description: string;
  tags: string[];
}

const ToggleComponent: FC<ToggleCompProps> = (props) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={styles.mainDiv}>
      <div className={styles.headingComp} onClick={() => setToggled(!toggled)}>
        <h3
          className={
            toggled
              ? `${styles.toggleArrow} ${styles.arrowRotated}`
              : styles.toggleArrow
          }
        >
          &#9654;
        </h3>
        <h3>{props.heading}</h3>
      </div>
      <div
        className={
          toggled ? `${styles.descComp} ${styles.descToggled}` : styles.descComp
        }
      >
        <div className={styles.tagBox}>
          {props.tags.map((tag) => {
            return (
              <p className={styles.descTag} key={tag}>
                {tag}
              </p>
            );
          })}
        </div>
        <br></br>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ToggleComponent;
