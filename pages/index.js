import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          フィヨルドブートキャンプ/フィヨルドブートキャンプ/フィヨルドブートキャンプ
        </p>
      </section>
      <section className={utilStyle.headingMd}>
        <h2>📝プログラマー日記</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a className={utilStyle.boldText}>タイトルだよ</a>
              </Link>
              <br />
              <samll className={utilStyle.lightText}>2023年2月1日</samll>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
