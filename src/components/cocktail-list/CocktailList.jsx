import { useState } from "react";
import { useSelector } from "react-redux";

import { cocktailsSelector } from "../../store/cocktailSelector";

import CocktailListItem from "../cocktail-list-item/";
import Modal from "../modal";
import ModalAddForm from "../modal-add-form";

import "./cocktailList.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);

	const [modalActive, setModalActive] = useState(false);

	const cocktailListToRender = cocktails.map((cocktail) => {
		return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
	});

	return (
		<ul className='cocktail-list'>
			{cocktailListToRender}
			<button className='addButton' onClick={() => setModalActive(true)}>
				Add cocktail
			</button>
			<Modal active={modalActive} setActive={setModalActive}>
				<ModalAddForm setActive={setModalActive} />
			</Modal>
		</ul>
	);
};

export default CocktailList;
