import SumDisplay from "../SumDisplay/SumDisplay";
import styles from "./Layout.module.css"


export default function Layout({children, totalSum}) {

	return (
	<body className={styles.body}>
			<header>
				<SumDisplay totalSum={totalSum} />
			</header>
			
			<main>
				{children}
			</main>

			<footer className={styles.footer}>
				2024 © SpendingFrenzy A/S
			</footer>
	</body>
	)
}