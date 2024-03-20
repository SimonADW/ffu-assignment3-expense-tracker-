import { Children } from "react";
import SumDisplay from "../SumDisplay/SumDisplay";
import styles from "./Layout.module.css"

export default function Layout({children, formOpen}) {

	return (
	<body className={styles.body}>
			<header>
				<SumDisplay />
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