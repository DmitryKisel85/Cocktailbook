import { Link } from "react-router-dom";

import styles from "./notfoundpage.module.scss";

const NotFoundPage = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.header}>404</h1>
			<div className={styles.cloak__wrapper}>
				<div className={styles.cloak__container}>
					<div className={styles.cloak}></div>
				</div>
			</div>
			<div className={styles.info}>
				<h2 className={styles.secondary__header}>We can't find that cocktail</h2>
				<Link to='/' className={styles.link}>
					Home
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
