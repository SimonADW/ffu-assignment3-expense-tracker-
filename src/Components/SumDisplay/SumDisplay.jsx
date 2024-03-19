import styles from "./SumDisplay.module.css"


export default function SumDisplay() {


	return <>
		<section className={styles.sumDisplaySection}>
			<div>
				<div>Today´s spending</div>
				<div>400,-</div>
			</div>

			<div>
				<div>Total spending</div>
				<div>2400,-,-</div>
			</div>
		</section>
	</>
}