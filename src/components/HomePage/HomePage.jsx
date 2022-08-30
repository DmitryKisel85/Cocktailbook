import { useEffect } from "react";
import { useSelector } from "react-redux";

import { modalWindowIsOpenSelector, modalWindowTypeSelector } from "../../store/modal/modalWindowSelector";
import { useScrollLock } from "../../hooks/useScrollLock";

import Header from "../Header";
import SearchBox from "../SearchBox";
import CocktailList from "../CocktailList";
import Modal from "../Modal";
import ModalAddForm from "../ModalAddForm";

import styles from "./homepage.module.scss";

const HomePage = () => {
	const modalState = useSelector(modalWindowIsOpenSelector);
	const typeOfModal = useSelector(modalWindowTypeSelector);

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
						{typeOfModal === "form" && <ModalAddForm />}
						{typeOfModal === "edit" && <ModalAddForm isEdit />}
					</Modal>
				)}
			</main>
		</div>
	);
};

export default HomePage;
