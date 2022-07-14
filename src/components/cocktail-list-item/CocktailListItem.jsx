import "./cocktailListItem.scss";

const CocktailListItem = ({ title, ingredients, method, glass }) => {
	return (
		<div>
			<div className='cocktail-list-item'>
				<div className='cocktail-list-item__img-block'>
					<img src='https://www.thecocktaildb.com/images/ingredients/gin-Medium.png' alt='cocktail' />
				</div>
				<div className='cocktail-list-item__description-block'>
					<h2 className='cocktail-list-item__title'>{title}</h2>
					<p className='cocktail-list-item__description'>Ingredients:{ingredients}</p>
					<p className='cocktail-list-item__description'>Method: {method}</p>
					<p className='cocktail-list-item__description'>Glass: {glass}</p>
				</div>
			</div>
		</div>
	);
};

export default CocktailListItem;
