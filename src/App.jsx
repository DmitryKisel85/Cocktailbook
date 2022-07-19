import { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/header";
import MainBlock from "./components/main-block";

import Modal from "./components/modal";
import ModalAddForm from "./components/modal-add-form";

import { modalWindowIsOpenSelector, modalWindowTypeSelector } from "./store/modalWindowSelector";

import "./App.scss";

function App() {
	const modalState = useSelector(modalWindowIsOpenSelector);
	const typeOfModal = useSelector(modalWindowTypeSelector);

	console.log(modalState, typeOfModal);

	// блокируем скролл, когда открыто модальное окно
	useEffect(() => {
		if (modalState) {
			document.body.style.overflow = "hidden";
			return () => (document.body.style.overflow = "unset");
		}
	}, [modalState]);

	return (
		<div className='App'>
			<Header />
			<MainBlock />
			{modalState && <Modal>{typeOfModal === "form" ? <ModalAddForm /> : <h2>Preview</h2>}</Modal>}
		</div>
	);
}

export default App;
