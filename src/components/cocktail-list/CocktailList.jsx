import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cocktailsSelector } from "../../store/cocktailSelector";

import CocktailListItem from "../cocktail-list-item/";
import Modal from "../modal";
import ModalAddForm from "../modal-add-form";

import { addCocktail } from "../../store/cocktailSlice";

import "./cocktailList.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);

	const [modalActive, setModalActive] = useState(false);

	const dispatch = useDispatch();

	const newCocktail = {
		id: 5,
		title: "Margarita",
		ingredients:
			"Tequila 50ml, Cointreau 30ml, lime juice 20ml, Tequila 50ml, Cointreau 30ml, lime juice 20ml,Tequila 50ml, Cointreau 30ml, lime juice 20ml Tequila 50ml, Cointreau 30ml, lime juice 20ml Tequila 50ml, Cointreau 30ml, lime juice 20ml",
		method: "stir",
		glass: "margarita glass",
		imageUrl: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
	};

	const handleClick = () => {
		dispatch(addCocktail(newCocktail));
	};

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
				<ModalAddForm />
			</Modal>
		</ul>
	);
};

export default CocktailList;
