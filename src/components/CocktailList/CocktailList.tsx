import { memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import { filteredCocktailsSelector, isLoadingSelector } from "store/cocktail/cocktailSelector";

import { showModalWindow } from "store/modal/modalWindowSlice";
import { fetchCocktailsToListStart } from "store/cocktail/cocktailSlice";

import CocktailListItem from "components/CocktailListItem";
import Spinner from "components/Spinner";

import { ICocktail } from "types/generalTypes";

import styles from "./cocktailList.module.scss";

const CocktailList = () => {
    const filteredCocktailsList = useAppSelector(filteredCocktailsSelector);
    const isLoading = useAppSelector(isLoadingSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        filteredCocktailsList.length === 0 && dispatch(fetchCocktailsToListStart());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShowForm = () => {
        dispatch(showModalWindow({ typeOfModalWindow: "form" }));
    };

    const cocktailListToRender = filteredCocktailsList.map((cocktail: ICocktail) => {
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
