import { Link } from "react-router-dom";

import s from "./notfoundpage.module.scss";

const NotFoundPage = () => {
	return (
		<div className={s.root}>
			<h1 className={s.header}>404</h1>
			<div className={s.cloak__wrapper}>
				<div className={s.cloak__container}>
					<div className={s.cloak}></div>
				</div>
			</div>
			<div className={s.info}>
				<h2 className={s.secondary__header}>We can't find that cocktail</h2>
				<Link to='/' className={s.link}>
					Home
				</Link>
			</div>
		</div>
	);
};

export { NotFoundPage };
