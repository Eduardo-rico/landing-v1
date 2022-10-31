import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Grid, GridItem } from '@chakra-ui/react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

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
					Proyecto de intervención II Eduardo Rico
				</h1>
				<p className={styles.parrafo}>Martícula: 117876</p>
				<p className={styles.parrafo}>Grupo: CD12</p>
				<p className={styles.parrafo}>Materia: Proyecto de intervención II</p>
				<p className={styles.parrafo}>Maestro: Ricardo Pérez Águila</p>
				<p className={styles.parrafo}>Portafolio de evidencias</p>
			</main>

			<main className={styles.main}>
				<h2 className={styles.title}>Descripción del proyecto</h2>
				<p className={styles.parrafo}>
					Este portafolio de evidencia (incluido el deploy a producción de esta
					página web) refleja el trabajo hecho a lo largo de toda mi carrera en
					la IEU.
				</p>
				<p className={styles.parrafo}>
					El proyecto es un análisis de caso para la predicción del número de
					vistas de una publicación en Facebook a partir de 7 datos de entrada.
				</p>
				<ul>
					<li>Categoría</li>
					<li>Numero total de likes</li>
					<li>Tipo de publicación</li>
					<li>Mes de publicación</li>
					<li>Día de la semana de publicación</li>
					<li>Hora de publicación</li>
					<li>Si la publicación es pagado o no</li>
				</ul>
				<p className={styles.parrafo}>
					El parámetro de la salida es La cantidad que ha dado like al post y
					que el usuarío ha sido captado (engaged). La data que usé es de UCI y
					puede ser consultada dando click{' '}
					<a
						href="https://archive.ics.uci.edu/ml/datasets/Facebook+metrics"
						target="_blank"
						rel="noreferrer"
					>
						aquí
					</a>
				</p>

				<p className={styles.parrafo}>
					El objetivo principal es tener un error de predicción similar a la del
					artículo:{' '}
					<strong>
						Moro, S., Rita, P., & Vala, B. (2016). Predicting social media
						performance metrics and evaluation of the impact on brand building:
						A data mining approach. Journal of Business Research, 69, 3341-3351.{' '}
					</strong>
					Que se puede encontrar dando click{' '}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.semanticscholar.org/paper/Predicting-social-media-performance-metrics-and-of-Moro-Rita/dec55692590820754b53c916e29bb2b42c0e5104"
					>
						aquí
					</a>
				</p>

				<p className={styles.parrafo}>
					El artículo anterior utiliza como métrica la métrica de los errores
					porcentuales es decri <strong>MAPE</strong> que está definido como:{' '}
					<Latex strict>
						MAPE = $1 \over n $ $\sum$ $|$ $Real - Pred \over Real $ $|$
					</Latex>{' '}
					Para todo el n conjunto de datos.
				</p>
				<p className={styles.parrafo}>
					Se construyeron tres modelos para tratar de identificar cúal es el
					mejor, una regresión lineal, un arbol aleatorio y un perceptron
					multicapa.
				</p>
				<p className={styles.parrafo}>Como conclusiones tenemos que:</p>
				<ul>
					<li>Regresión Lineal: MAPE= 10.44%</li>
					<li>Random Forest: MAPE= 9.81%</li>
					<li>Multilayer Perceptron: MAPE= 14.82%</li>
					<li>
						Con respecto al modelo (SVM) de Moro-Rita-Vala que tiene un MAPE de
						27.2% podemos concluir que nuestro peor modelo (MLP) tiene un error
						mucho más bajo 14.82%
					</li>
					<li>
						Al igual que Moro-Rita-Vala para su modelo, nuestros modelos RL y RF
						también tienen pesos altos para las categorías &apos;Page Total
						Likes&apos; y &apos;Type&apos; (tipo de contenido), es decir, son
						las características más importantes para los tres modelos, SVM, RL y
						RF, con esas variables independientes y con ese dataset de
						entrenamiento.
					</li>
				</ul>
				<a href={'../public/IEU PORTAFOLIO.pdf'} download>
					Descargar el PDF
				</a>
			</main>

			{/* <Grid
				h="95vh"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(5, 1fr)"
				gap={4}
			>
				<GridItem rowSpan={2} colSpan={1} bg="blue">
					<div>
						<div className={styles.opciones}>
							<p>Crear Usuario</p>
						</div>
						<div className={styles.opciones}>
							<p>opcion 2</p>
						</div>
					</div>
				</GridItem>
				<GridItem colSpan={2} bg="papayawhip">
					<p>Hola 2</p>
				</GridItem>
				<GridItem colSpan={2} bg="papayawhip">
					<p>Hola 3</p>
				</GridItem>
				<GridItem colSpan={4} bg="tomato">
					<p>Hola 4</p>
				</GridItem>
			</Grid> */}

			<footer className={styles.footer}>
				{/* <p>Esto es el footer</p> */}
			</footer>
		</div>
	);
}
