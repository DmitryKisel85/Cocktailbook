import { useCallback } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import { useAppDispatch } from "hooks/typedHooks";

import { showModalWindow } from "store/modal/modalWindowSlice";

import { ICocktail } from "types";

import s from "./cocktailListItem.module.scss";
interface ICocktailListItemProps {
	cocktail: ICocktail;
}

const CocktailListItem = ({ cocktail }: ICocktailListItemProps) => {
	const dispatch = useAppDispatch();

	const { id, name, ingredients, method, glass, imageUrl } = cocktail;

	const handleShowEditCocktailModal = useCallback(() => {
		dispatch(showModalWindow({ typeOfModalWindow: "edit", previewCocktail: cocktail }));
	}, [cocktail, dispatch]);

	return (
		<div className={s.root}>
			<div className={s.imgBlock}>
				<img className={s.img} src={imageUrl} alt='cocktail' />
			</div>
			<div className={s.descriptionBlock}>
				<div className={s.header}>
					<h2>{name}</h2>
					<div className={s.btnsBlock}>
						<button className={s.btn} onClick={handleShowEditCocktailModal}>
							<i className={cx(s.icon, `fas fa-pen`)}></i>
						</button>
						<Link to={`/cocktails/${id}`} className={s.btn}>
							<i className={cx(s.icon, `fas fa-search`)}></i>
						</Link>
					</div>
				</div>
				<p className={s.text}>
					<b>Ingredients:</b> {ingredients}
				</p>
				<p className={s.text}>
					<b>Method:</b> {method}
				</p>
				<p className={s.text}>
					<b>Glass:</b> {glass}
				</p>
			</div>
		</div>
	);
};

export { CocktailListItem };
