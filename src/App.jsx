import { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import CocktailList from "./components/CocktailList";

import Modal from "./components/Modal";
import ModalAddForm from "./components/ModalAddForm";
import ModalPreview from "./components/ModalPreview";

import { modalWindowIsOpenSelector, modalWindowTypeSelector } from "./store/modal/modalWindowSelector";

import { useScrollLock } from "./hooks/useScrollLock";

import styles from "./App.module.scss";

function App() {
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
		<div className={styles.AppContainer}>
			<div className={styles.App}>
				<Header />
				<CocktailList />
				{modalState && (
					<Modal>
						{typeOfModal === "form" && <ModalAddForm />}
						{typeOfModal === "preview" && <ModalPreview />}
						{typeOfModal === "edit" && <ModalAddForm isEdit />}
					</Modal>
				)}
			</div>
		</div>
	);
}

export default App;
