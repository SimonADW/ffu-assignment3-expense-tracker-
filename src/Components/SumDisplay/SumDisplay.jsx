import styles from "./SumDisplay.module.css"


export default function SumDisplay({totalSum, daySum}) {


	return <>
		<section className={styles.sumDisplaySection}>
			<div className={styles.sumWrapper}>
				
				<div>
					<div>Today´s spending</div>
					<div className={styles.todaySum}>{daySum},-</div>
				</div>
				<div>
					<div>Total spending</div>
					<div className={styles.totalSum}>{totalSum},-</div>
				</div>
			</div>
		</section>
	</>
}