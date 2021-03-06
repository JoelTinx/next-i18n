import Head from "next/head";
import styles from "../styles/Home.module.css";
import lang from "../../public/locale";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <nav style={{ display: "flex", gap: "1rem" }}>
            {Object.entries(lang).map(([key]) => (
              <Link href="#" locale={key} key={key}>
                <a style={{ color: "steelblue" }}>{key.toUpperCase()}</a>
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default MainLayout;
