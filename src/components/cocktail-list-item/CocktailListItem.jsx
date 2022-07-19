import "./cocktailListItem.scss";

const CocktailListItem = ({ cocktail: { name, ingredients, method, glass, imageUrl } }) => {
	return (
		<>
			<div className='cocktail-list-item'>
				<div className='cocktail-list-item__img-block'>
					<img src={imageUrl || "https://i.pinimg.com/originals/a3/b9/6f/a3b96f21beb326de113562c5062368e9.png"} alt='cocktail' />
				</div>
				<div className='cocktail-list-item__description-block'>
					<h2 className='cocktail-list-item__title'>{name}</h2>
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
