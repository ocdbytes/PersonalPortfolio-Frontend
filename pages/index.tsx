import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import MainScreenGraphic from "../components/MainScreenGraphic";
import Navbar from "../components/Navbar";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arun Jangra</title>
        <meta
          name="description"
          content="Software Engineer Intern @kanalabs | CTF Player ☠️ | Blockchain ⛓️ | Full Stack Developer 💻 | ♥️ hardware 📟 | Ex-FSWD Intern @Zapezzy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainScreenGraphic />
      <Footer />
    </div>
  );
}
