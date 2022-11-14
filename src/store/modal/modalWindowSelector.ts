import { RootState } from "store";

export const modalWindowIsOpenSelector = (state: RootState) => state.modalWindow.modalWindowIsOpen;
export const modalWindowTypeSelector = (state: RootState) => state.modalWindow.typeOfModalWindow;
export const modalWindowCocktailPreview = (state: RootState) => state.modalWindow.previewCocktail;
