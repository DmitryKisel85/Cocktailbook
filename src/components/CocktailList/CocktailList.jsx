import { memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { searchTermSelector, cocktailsSelector } from "../../store/cocktail/cocktailSelector";

import { showModalWindow } from "../../store/modal/modalWindowSlice";

import CocktailListItem from "../CocktailListItem";

import styles from "./cocktailList.module.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);
	const searchTerm = useSelector(searchTermSelector);

	const dispatch = useDispatch();

	const handleShowForm = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "form" }));
	};

	const cocktailListToRender = cocktails
		.filter(
			(cocktail) => cocktail.name.toLowerCase().includes(searchTerm) || cocktail.ingredients.toLowerCase().includes(searchTerm) || cocktail.method.toLowerCase().includes(searchTerm) || cocktail.glass.toLowerCase().includes(searchTerm)
		)
		.map((cocktail) => {
			return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
		});

	return (
		<ul className={styles.root}>
			{cocktailListToRender}
			<button className={styles.addButton} onClick={handleShowForm}>
				Add cocktail
			</button>
		</ul>
	);
};

export default memo(CocktailList);
