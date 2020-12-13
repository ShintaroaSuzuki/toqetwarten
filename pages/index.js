import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>toqetwarten株式会社</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className="gradient">
                    <img src="/gorilla_smooth.jpeg" />
                    <div className="titleLogo" alt="gorilla">
                        <p className="title">toqetwarten</p>
                        <hr className="logoBar" />
                    </div>
                    <div className="homeTabs">
                        <Link href="./about">
                            <a className="tab">about</a>
                        </Link>
                        <Link href="./products">
                            <a className="tab">products</a>
                        </Link>
                        <Link href="./ir">
                            <a className="tab">IR</a>
                        </Link>
                        <Link href="./recruit">
                            <a className="tab">recruit</a>
                        </Link>
                        <Link href="./contact">
                            <a className="tab">contact</a>
                        </Link>
                    </div>
                    <p className="message">繊細で、逞しい。</p>
                </div>
            </main>
            <main>
                <h1 className="heading1">目指すは、日本のシルバーバック。</h1>
                <p className="explain">
                    シルバーバックをご存知でしょうか。実は、ゴリラの中には背中の毛が白いゴリラと、そうでないゴリラがいるのです。
                </p>
                <p className="explain">
                    この背中の白いゴリラをシルバーバックといい、シルバーバックは群れの長を務めています。
                    <br />
                    シルバーバックが亡くなると、また新たなシルバーバックが群れの中から生まれます。
                </p>

                <p className="explain">
                    私たちは、日本という「群れ」の中の、新たなシルバーバックになり、日本を先導する会社でありたいと思い、日々活動しています。
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
