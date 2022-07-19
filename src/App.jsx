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

	return (
		<div className='App'>
			<Header />
			<MainBlock />
			{modalState && <Modal>{typeOfModal === "form" ? <ModalAddForm /> : null}</Modal>}
		</div>
	);
}

export default App;
