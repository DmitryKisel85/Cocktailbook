import { memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { filteredCocktailsSelector } from "../../store/cocktail/cocktailSelector";

import { showModalWindow } from "../../store/modal/modalWindowSlice";

import CocktailListItem from "../CocktailListItem";

import styles from "./cocktailList.module.scss";

const CocktailList = () => {
	const filteredCocktailsList = useSelector(filteredCocktailsSelector);

	const dispatch = useDispatch();

	const handleShowForm = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "form" }));
	};

	const cocktailListToRender = filteredCocktailsList.map((cocktail) => {
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
