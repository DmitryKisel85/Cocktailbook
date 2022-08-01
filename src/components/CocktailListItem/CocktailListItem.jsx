import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { showModalWindow } from "../../store/modal/modalWindowSlice";

import styles from "./cocktailListItem.module.scss";

const CocktailListItem = ({ cocktail }) => {
	const dispatch = useDispatch();
	const { name, ingredients, method, glass, imageUrl } = cocktail;

	const handleShowPreviewModal = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "preview", previewCocktail: cocktail }));
	};
	const handleShowEditCocktailModal = () => {
		dispatch(showModalWindow({ typeOfModalWindow: "edit", previewCocktail: cocktail }));
	};

	return (
		<div className={styles.root}>
			<div className={styles.imgBlock}>
				<img className={styles.img} src={imageUrl} alt='cocktail' />
			</div>
			<div className={styles.descriptionBlock}>
				<div className={styles.descriptionHeader}>
					<h2>{name}</h2>
					<div className={styles.btnsBlock}>
						<button className={styles.previewButton} onClick={handleShowEditCocktailModal}>
							<i className={`${styles.previewIcon} fas fa-pen`}></i>
						</button>
						<button className={styles.previewButton} onClick={handleShowPreviewModal}>
							<i className={`${styles.previewIcon} fas fa-search`}></i>
						</button>
					</div>
				</div>
				<p className={styles.description}>
					<b>Ingredients:</b> {ingredients}
				</p>
				<p className={styles.description}>
					<b>Method:</b> {method}
				</p>
				<p className={styles.description}>
					<b>Glass:</b> {glass}
				</p>
			</div>
		</div>
	);
};

CocktailListItem.propTypes = {
	cocktail: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.string.isRequired,
		method: PropTypes.string.isRequired,
		glass: PropTypes.string.isRequired,
		imageUrl: PropTypes.string,
	}),
};

export default CocktailListItem;
