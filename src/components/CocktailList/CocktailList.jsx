import { memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { cocktailsSelector } from "../../store/cocktail/cocktailSelector";

import { showModalWindow } from "../../store/modal/modalWindowSlice";

import CocktailListItem from "../CocktailListItem";

import styles from "./cocktailList.module.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);

	const dispatch = useDispatch();

	const handleShowForm = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "form" }));
	};

	const cocktailListToRender = cocktails.map((cocktail) => {
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
