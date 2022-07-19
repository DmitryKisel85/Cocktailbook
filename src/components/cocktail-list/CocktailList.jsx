import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cocktailsSelector } from "../../store/cocktailSelector";
import { modalWindowSelector } from "../../store/modalWindowSelector";

import { showModalWindow } from "../../store/modalWindowSlice";

import CocktailListItem from "../cocktail-list-item/";
import Modal from "../modal";
import ModalAddForm from "../modal-add-form";

import "./cocktailList.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);
	const modalState = useSelector(modalWindowSelector);

	const dispatch = useDispatch();

	// блокируем скролл, когда открыто модальное окно
	useEffect(() => {
		if (modalState) {
			document.body.style.overflow = "hidden";
			return () => (document.body.style.overflow = "unset");
		}
	}, [modalState]);

	const cocktailListToRender = cocktails.map((cocktail) => {
		return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
	});

	return (
		<ul className='cocktail-list'>
			{cocktailListToRender}
			<button className='addButton' onClick={() => dispatch(showModalWindow())}>
				Add cocktail
			</button>

			{modalState && (
				<Modal>
					<ModalAddForm />
				</Modal>
			)}
		</ul>
	);
};

export default CocktailList;
