import { ChangeEvent } from "react";

import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";

import { searchCocktail } from "../../store/cocktail/cocktailSlice";
import { searchTermSelector } from "../../store/cocktail/cocktailSelector";

import styles from "./searchBox.module.scss";
import { useEffect } from "react";

const SearchBox = () => {
    const searchTerm = useAppSelector(searchTermSelector);

    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        dispatch(searchCocktail(searchTerm));
        setSearchParams({ search: searchTerm });
    };

    useEffect(() => {
        if (!searchTerm) {
            searchParams.delete("search");
            setSearchParams(searchParams);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    return (
        <input
            type="text"
            name="search"
            className={styles.searchBox}
            placeholder="Search..."
            value={searchTerm}
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;
