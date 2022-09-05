import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { searchCocktail } from "../../store/cocktail/cocktailSlice";
import { searchTermSelector } from "../../store/cocktail/cocktailSelector";

import styles from "./searchBox.module.scss";
import { useEffect } from "react";

const SearchBox = () => {
	const searchTerm = useSelector(searchTermSelector);

	const [searchParams, setSearchParams] = useSearchParams();

	const dispatch = useDispatch();

	const onChangeHandler = (event) => {
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

	return <input type='text' name='search' className={styles.searchBox} placeholder='Search...' value={searchTerm} onChange={onChangeHandler} />;
};

export default SearchBox;
