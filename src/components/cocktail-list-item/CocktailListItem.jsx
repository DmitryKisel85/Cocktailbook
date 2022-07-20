import { useDispatch } from "react-redux";

import { showModalWindow } from "../../store/modalWindowSlice";

import "./cocktailListItem.scss";

const CocktailListItem = ({ cocktail }) => {
	const dispatch = useDispatch();
	const { name, ingredients, method, glass, imageUrl } = cocktail;

	const handleClick = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "preview", previewCocktail: cocktail }));
	};

	return (
		<>
			<div className='cocktail-list-item'>
				<div className='cocktail-list-item__img-block'>
					<img src={imageUrl || "https://i.pinimg.com/originals/a3/b9/6f/a3b96f21beb326de113562c5062368e9.png"} alt='cocktail' />
				</div>
				<div className='cocktail-list-item__description-block'>
					<div className='cocktail-list-item__header'>
						<h2 className='cocktail-list-item__title'>{name}</h2>
						<button className='preview-button' onClick={handleClick}>
							<i className='fas fa-search'></i>
						</button>
					</div>
					<p className='cocktail-list-item__description'>
						<b>Ingredients:</b> {ingredients}
					</p>
					<p className='cocktail-list-item__description'>
						<b>Method:</b> {method}
					</p>
					<p className='cocktail-list-item__description'>
						<b>Glass:</b> {glass}
					</p>
				</div>
			</div>
		</>
	);
};

export default CocktailListItem;
