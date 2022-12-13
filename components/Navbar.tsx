import React, { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.navMain}>
      <div>
        <Link href="/">
          <Image src="/icon.png" alt="main-icon" width="50" height="50"></Image>
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/projects" className={styles.NavLinksHref}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.NavLinksHref}>
            About
          </Link>
        </li>
        <li>
          <Link href="/experience" className={styles.NavLinksHref}>
            Experience
          </Link>
        </li>
      </ul>

      <div onClick={() => setClicked(!clicked)} className={styles.burgerToggle}>
        <Burger state={clicked} />
      </div>

      <MobileNav clicked={clicked} setClicked={setClicked} />
    </div>
  );
};

interface MobileNavProps {
  setClicked: Dispatch<SetStateAction<boolean>>;
  clicked: boolean;
}

const MobileNav: FC<MobileNavProps> = (props) => {
  return (
    <div
      className={
        !props.clicked
          ? styles.mobileNav
          : `${styles.mobileNav} ${styles.mobileNavTransformed}`
      }
    >
      <ul className={styles.navLinksMobile}>
        <li>
          <Link href="/projects" className={styles.NavLinksHref}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.NavLinksHref}>
            About
          </Link>
        </li>
        <li>
          <Link href="/experience" className={styles.NavLinksHref}>
            Experience
          </Link>
        </li>
        <li>
          <div
            className={styles.burgerCross}
            onClick={() => props.setClicked(false)}
          >
            ❌
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
