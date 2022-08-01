import { createSelector } from "@reduxjs/toolkit";

export const modalWindowIsOpenSelector = createSelector(
	(state) => state.modalWindow,
	(modalWindow) => modalWindow.modalWindowIsOpen
);

export const modalWindowTypeSelector = createSelector(
	(state) => state.modalWindow,
	(modalWindow) => modalWindow.typeOfModalWindow
);

export const modalWindowCocktailPreview = createSelector(
	(state) => state.modalWindow,
	(modalWindow) => modalWindow.previewCocktail
);
