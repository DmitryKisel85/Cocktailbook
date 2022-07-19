import { useSelector, useDispatch } from "react-redux";

import { modalWindowSelector } from "../../store/modalWindowSelector";

import { hideModalWindow } from "../../store/modalWindowSlice";

import "./modal.scss";

const Modal = ({ children }) => {
	const modalState = useSelector(modalWindowSelector);

	const dispatch = useDispatch();

	return (
		<div className={modalState ? "modal active" : "modal"} onClick={() => dispatch(hideModalWindow())}>
			<div className={modalState ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
