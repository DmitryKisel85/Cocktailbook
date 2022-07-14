import { useSelector } from "react-redux";

import { cocktailsSelector } from "../../store/cocktailSelector";

import CocktailListItem from "../cocktail-list-item/";

import "./cocktailList.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);

	const cocktailListToRender = cocktails.map((cocktail) => {
		const { id, title, ingredients, method, glass } = cocktail;
		return <CocktailListItem key={id} title={title} ingredients={ingredients} method={method} glass={glass} />;
	});

	return <div className='cocktail-list'>{cocktailListToRender}</div>;
};

export default CocktailList;
