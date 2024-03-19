import { Children } from "react";
import SumDisplay from "../SumDisplay/SumDisplay";

export default function Layout({children}) {

	return <>
		<header>
			<SumDisplay />
		</header>
			{children}
		<footer>
			2024 © SpendingFrenzy A/S
		</footer>
	</>
}