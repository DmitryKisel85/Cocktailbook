import { memo } from "react";

import s from "./header.module.scss";

const Header = memo(() => {
	return (
		<header className={s.root}>
			<h1>Personal Cocktail Book</h1>
		</header>
	);
});

export { Header };
