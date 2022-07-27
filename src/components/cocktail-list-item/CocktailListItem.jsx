import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { showModalWindow } from "../../store/modalWindowSlice";

import "./cocktailListItem.scss";

const CocktailListItem = ({ cocktail }) => {
	const dispatch = useDispatch();
	const { name, ingredients, method, glass, imageUrl } = cocktail;
	console.log(imageUrl);

	const handleClick = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "preview", previewCocktail: cocktail }));
	};

	return (
		<>
			<div className='cocktail-list-item'>
				<div className='cocktail-list-item__img-block'>
					<img className='cocktail-list-item__img' src={imageUrl} alt='cocktail' />
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

CocktailListItem.propTypes = {
	cocktail: PropTypes.object,
};

export default CocktailListItem;
