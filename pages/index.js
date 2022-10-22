import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Pagina personal de Eduardo Rico" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Bienvenido a la página personal de Eduardo Rico
				</h1>
			</main>

			<footer className={styles.footer}>
				<p>Esto es el footer</p>
			</footer>
		</div>
	);
}
