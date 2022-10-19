import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const modalWindowIsOpenSelector = createSelector(
    (state: RootState) => state.modalWindow,
    (modalWindow) => modalWindow.modalWindowIsOpen
);

export const modalWindowTypeSelector = createSelector(
    (state: RootState) => state.modalWindow,
    (modalWindow) => modalWindow.typeOfModalWindow
);

export const modalWindowCocktailPreview = createSelector(
    (state: RootState) => state.modalWindow,
    (modalWindow) => modalWindow.previewCocktail
);
