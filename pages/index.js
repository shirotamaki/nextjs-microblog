import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyle from "../styles/utils.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>ロックンロール・プログラマーです</p>
      </section>

      <section>
        <h2>📝メモタイトル</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" />
            </Link>
            <Link href="/" legacyBehavior>
              <a>タイトルだよ</a>
            </Link>
            <br />
            <samll>2023年2月</samll>
          </article>
        </div>
      </section>
    </Layout>
  );
}
