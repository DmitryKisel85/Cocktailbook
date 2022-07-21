import { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/header";
import CocktailList from "./components/cocktail-list";

import Modal from "./components/modal";
import ModalAddForm from "./components/modal-add-form";
import ModalPreview from "./components/modal-preview";

import { modalWindowIsOpenSelector, modalWindowTypeSelector } from "./store/modalWindowSelector";

import { useScrollLock } from "./hooks/useScrollLock";

import "./App.scss";

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
		<div className='App'>
			<Header />
			<CocktailList />
			{modalState && (
				<Modal>
					{typeOfModal === "form" && <ModalAddForm />}
					{typeOfModal === "preview" && <ModalPreview />}
				</Modal>
			)}
		</div>
	);
}

export default App;
