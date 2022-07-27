import { memo } from "react";

import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>Personal Cocktail Book</h1>
		</header>
	);
};

export default memo(Header);
