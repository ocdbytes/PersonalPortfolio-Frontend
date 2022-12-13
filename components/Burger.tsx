import React, { FC } from "react";
import styles from "../styles/Burger.module.css";

interface BurgerProps {
  state: boolean;
}

const Burger: FC<BurgerProps> = (props) => {
  return (
    <div className={styles.burger}>
      {!props.state ? (
        <div className={styles.burgerMain}>
          <div className={styles.burgerStick}></div>
          <div className={styles.burgerStick}></div>
          <div className={styles.burgerStick}></div>
        </div>
      ) : (
        <div className={styles.burgerCross}>❌</div>
      )}
    </div>
  );
};

export default Burger;
