import cx from "classnames";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import { modalWindowIsOpenSelector } from "store/modal/modalWindowSelector";
import { hideModalWindow } from "store/modal/modalWindowSlice";

import s from "./modal.module.scss";

interface IModalProps {
	children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
	const modalState = useAppSelector(modalWindowIsOpenSelector);

	const dispatch = useAppDispatch();

	const handleModalClose = () => {
		dispatch(hideModalWindow());
	};

	return (
		<div className={cx(s.root, { [s.active]: modalState })} onClick={handleModalClose}>
			<div className={s.box} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export { Modal };
