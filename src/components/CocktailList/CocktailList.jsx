import { memo, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { filteredCocktailsSelector, isLoadingSelector } from "../../store/cocktail/cocktailSelector";

import { showModalWindow } from "../../store/modal/modalWindowSlice";
import { fetchCocktailsToListStart } from "../../store/cocktail/cocktailSlice";

import CocktailListItem from "../CocktailListItem";
import Spinner from "../Spinner";

import styles from "./cocktailList.module.scss";

const CocktailList = () => {
    const filteredCocktailsList = useSelector(filteredCocktailsSelector);

    const isLoading = useSelector(isLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        filteredCocktailsList.length === 0 && dispatch(fetchCocktailsToListStart());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShowForm = () => {
        dispatch(showModalWindow({ typeOfModalWindow: "form" }));
    };

    const cocktailListToRender = filteredCocktailsList.map((cocktail) => {
        return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
    });

    return isLoading ? (
        <Spinner />
    ) : (
        <ul className={styles.root}>
            {cocktailListToRender}
            <button className={styles.addButton} onClick={handleShowForm}>
                Add cocktail
            </button>
        </ul>
    );
};

export default memo(CocktailList);
