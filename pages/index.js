import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          フィヨルドブートキャンプ　フィヨルドブートキャンプ　フィヨルドブートキャンプ
        </p>
      </section>
      <section className={utilStyle.headingMd}>
        <h2>📝プログラマー日記</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyle.boldText}>タイトルだよ</a>
            </Link>
            <br />
            <samll className={utilStyle.lightText}>2023年2月1日</samll>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail02.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyle.boldText}>タイトルだよ</a>
            </Link>
            <br />
            <samll className={utilStyle.lightText}>2023年2月1日</samll>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail03.jpeg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyle.boldText}>タイトルだよ</a>
            </Link>
            <br />
            <samll className={utilStyle.lightText}>2023年2月1日</samll>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail04.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyle.boldText}>タイトルだよ</a>
            </Link>
            <br />
            <samll className={utilStyle.lightText}>2023年2月1日</samll>
          </article>
        </div>
      </section>
    </Layout>
  );
}
