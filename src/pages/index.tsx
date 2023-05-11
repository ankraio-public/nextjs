import Image from "next/image";
import styles from "../styles/styles.module.css";

import Seo from "@/components/elements/Seo";

const Home = () => {
  return (
    <>
      <Seo />
      <div className={styles.container}>
        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.tsx</code>
        </p>
        <a
          href="https://ankra.io"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ankra_anchor}
        >
          <span>By Ankra</span>
          <Image
            src="/ankra.png"
            alt="Ankra Logo"
            width={200}
            height={200}
            priority
            className={styles.logo}
          />
        </a>
      </div>
    </>
  );
};

export default Home;
