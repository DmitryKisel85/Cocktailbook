// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cocktailsSelector } from "../../store/cocktailSelector";

import { showModalWindow } from "../../store/modalWindowSlice";

import CocktailListItem from "../cocktail-list-item/";

import "./cocktailList.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "form" }));
	};

	const cocktailListToRender = cocktails.map((cocktail) => {
		return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
	});

	return (
		<ul className='cocktail-list'>
			{cocktailListToRender}
			<button className='addButton' onClick={handleClick}>
				Add cocktail
			</button>
		</ul>
	);
};

export default CocktailList;
