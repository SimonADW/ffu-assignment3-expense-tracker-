import SumDisplay from "../SumDisplay/SumDisplay";
import styles from "./Layout.module.css"


export default function Layout({children, totalSum, daySum}) {

	return (
	<body className={styles.body}>
			<header>
				<SumDisplay totalSum={totalSum} daySum={daySum} />
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