import { useSelector, useDispatch } from "react-redux";

import { cocktailsSelector } from "../../store/cocktailSelector";

import CocktailListItem from "../cocktail-list-item/";

import { addCocktail } from "../../store/cocktailSlice";

import "./cocktailList.scss";

const CocktailList = () => {
	const cocktails = useSelector(cocktailsSelector);
	console.log(cocktails);

	const dispatch = useDispatch();

	const newCocktail = {
		id: 5,
		title: "Margarita",
		ingredients:
			"Tequila 50ml, Cointreau 30ml, lime juice 20ml, Tequila 50ml, Cointreau 30ml, lime juice 20ml,Tequila 50ml, Cointreau 30ml, lime juice 20ml Tequila 50ml, Cointreau 30ml, lime juice 20ml Tequila 50ml, Cointreau 30ml, lime juice 20ml",
		method: "stir",
		glass: "margarita glass",
		imageUrl: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
	};

	const handleClick = () => {
		dispatch(addCocktail(newCocktail));
	};

	const cocktailListToRender = cocktails.map((cocktail) => {
		return <CocktailListItem key={cocktail.id} cocktail={cocktail} />;
	});

	return (
		<ul className='cocktail-list'>
			{cocktailListToRender}
			<button className='addButton' onClick={handleClick}>
				Add cocktail
			</button>
		</ul>
	);
};

export default CocktailList;
