import { memo, useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import { filteredCocktailsSelector, isListLoadingSelector } from "store/cocktail/cocktailSelector";
import { showModalWindow } from "store/modal/modalWindowSlice";
import { fetchCocktailsToListStart } from "store/cocktail/cocktailSlice";

import { CocktailListItem } from "components/CocktailListItem";
import { Spinner } from "components/Spinner";

import s from "./cocktailList.module.scss";

const CocktailList = memo(() => {
	const filteredCocktailsList = useAppSelector(filteredCocktailsSelector);
	const isListLoading = useAppSelector(isListLoadingSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		filteredCocktailsList.length === 0 && dispatch(fetchCocktailsToListStart());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleShowForm = useCallback(() => {
		dispatch(showModalWindow({ typeOfModalWindow: "form" }));
	}, [dispatch]);

	return isListLoading ? (
		<Spinner />
	) : (
		<ul className={s.root}>
			{filteredCocktailsList.map((cocktail) => {
				return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
			})}
			<button className={s.btn} onClick={handleShowForm}>
				Add cocktail
			</button>
		</ul>
	);
});

export { CocktailList };
