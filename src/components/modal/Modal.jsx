import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import classNames from "classnames";

import { modalWindowIsOpenSelector } from "../../store/modalWindowSelector";

import { hideModalWindow } from "../../store/modalWindowSlice";

import styles from "./modal.module.scss";

const Modal = ({ children }) => {
	const modalState = useSelector(modalWindowIsOpenSelector);

	const dispatch = useDispatch();

	const handleModalClose = () => {
		dispatch(hideModalWindow());
	};

	const modalActive = classNames(styles.modal, { [styles.active]: modalState });

	return (
		<div className={modalActive} onClick={handleModalClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node,
};

export default Modal;
