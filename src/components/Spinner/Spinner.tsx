import s from "./spinner.module.scss";

const Spinner = () => {
	return (
		<div className={s.overlay}>
			<div className={s.container}></div>
		</div>
	);
};

export { Spinner };
