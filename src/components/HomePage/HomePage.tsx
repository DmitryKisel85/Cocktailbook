import { useEffect } from "react";

import { useAppSelector } from "hooks/typedHooks";

import { modalWindowIsOpenSelector, modalWindowTypeSelector } from "../../store/modal/modalWindowSelector";
import { useScrollLock } from "../../hooks/useScrollLock";

import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import CocktailList from "../CocktailList/CocktailList";
import Modal from "../Modal/Modal";
import ModalAddForm from "../ModalAddForm/ModalAddForm";

import styles from "./homepage.module.scss";

const HomePage = () => {
    const modalState = useAppSelector(modalWindowIsOpenSelector);
    const typeOfModal = useAppSelector(modalWindowTypeSelector);

    const { lockScroll, unlockScroll } = useScrollLock();

    // блокируем скролл, когда открыто модальное окно
    useEffect(() => {
        if (modalState) {
            lockScroll();
        } else {
            unlockScroll();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState]);

    return (
        <div className={styles.root}>
            <main className={styles.main}>
                <Header />
                <SearchBox />
                <CocktailList />
                {modalState && (
                    <Modal>
                        {typeOfModal === "form" && <ModalAddForm isEdit={false} />}
                        {typeOfModal === "edit" && <ModalAddForm isEdit={true} />}
                    </Modal>
                )}
            </main>
        </div>
    );
};

export default HomePage;
