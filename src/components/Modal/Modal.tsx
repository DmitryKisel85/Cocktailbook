import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import classNames from "classnames";

import { modalWindowIsOpenSelector } from "../../store/modal/modalWindowSelector";

import { hideModalWindow } from "../../store/modal/modalWindowSlice";

import styles from "./modal.module.scss";

const Modal = ({ children }) => {
    const modalState = useAppSelector(modalWindowIsOpenSelector);

    const dispatch = useAppDispatch();

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

export default Modal;
