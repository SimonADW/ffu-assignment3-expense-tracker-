import styles from "./SumDisplay.module.css"


export default function SumDisplay({totalSum}) {


	return <>
		<section className={styles.sumDisplaySection}>
			<div>
				<div>Today´s spending</div>
				<div className={styles.todaySum}>400,-</div>
			</div>

			<div>
				<div>Total spending</div>
				<div className={styles.totalSum}>{totalSum},-</div>
			</div>
		</section>
	</>
}