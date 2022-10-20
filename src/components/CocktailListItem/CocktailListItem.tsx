import { useAppDispatch } from "hooks/typedHooks";

import { Link } from "react-router-dom";
import { ICocktail } from "types/generalTypes";

import { showModalWindow } from "store/modal/modalWindowSlice";

import styles from "./cocktailListItem.module.scss";

interface ICocktailListItemProps {
    cocktail: ICocktail;
}

const CocktailListItem = ({ cocktail }: ICocktailListItemProps) => {
    const dispatch = useAppDispatch();
    const { id, name, ingredients, method, glass, imageUrl } = cocktail;

    const handleShowEditCocktailModal = () => {
        dispatch(showModalWindow({ typeOfModalWindow: "edit", previewCocktail: cocktail }));
    };

    return (
        <div className={styles.root}>
            <div className={styles.imgBlock}>
                <img className={styles.img} src={imageUrl} alt="cocktail" />
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.descriptionHeader}>
                    <h2>{name}</h2>
                    <div className={styles.btnsBlock}>
                        <button className={styles.previewButton} onClick={handleShowEditCocktailModal}>
                            <i className={`${styles.previewIcon} fas fa-pen`}></i>
                        </button>
                        <Link to={`/cocktails/${id}`} className={styles.previewButton}>
                            <i className={`${styles.previewIcon} fas fa-search`}></i>
                        </Link>
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

export default CocktailListItem;
