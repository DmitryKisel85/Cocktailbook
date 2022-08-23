import { useDispatch } from "react-redux";

import { searchCocktail } from "../../store/cocktail/cocktailSlice";

import styles from "./searchBox.module.scss";

const SearchBox = () => {
	const dispatch = useDispatch();

	const onChangeHandler = (event) => {
		const searchTerm = event.target.value.toLowerCase();
		dispatch(searchCocktail(searchTerm));
	};

	return <input type='text' className={styles.searchBox} placeholder='Search...' onChange={onChangeHandler} />;
};

export default SearchBox;
