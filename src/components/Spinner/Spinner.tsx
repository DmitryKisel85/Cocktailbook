import s from "./spinner.module.scss";

const Spinner = () => {
	return (
		<div className={s.root}>
			<div className={s.container}></div>
		</div>
	);
};

export { Spinner };
