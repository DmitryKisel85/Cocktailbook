import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import classNames from "classnames";

import { modalWindowIsOpenSelector } from "../../store/modalWindowSelector";

import { hideModalWindow } from "../../store/modalWindowSlice";

import "./modal.scss";

const Modal = ({ children }) => {
	const modalState = useSelector(modalWindowIsOpenSelector);

	const dispatch = useDispatch();

	const handleModalClose = () => {
		dispatch(hideModalWindow());
	};

	const modalActive = classNames("modal", { active: modalState });
	const modalContentActive = classNames("modal__content", { active: modalState });

	return (
		<div className={modalActive} onClick={handleModalClose}>
			{/* <div className={modalState ? "modal active" : "modal"} onClick={handleModalClose}> */}
			<div className={modalContentActive} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.node,
};

export default Modal;
