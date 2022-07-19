import { createSelector } from "@reduxjs/toolkit";

export const modalWindowSelector = createSelector(
	(state) => state.modalWindow,
	(modalWindow) => modalWindow.modalWindowIsOpen
);
