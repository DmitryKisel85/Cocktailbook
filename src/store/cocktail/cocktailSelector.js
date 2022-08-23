import { createSelector } from "@reduxjs/toolkit";

export const cocktailsSelector = createSelector(
	(state) => state.cocktails,
	(cocktails) => cocktails.cocktails
);

export const searchTermSelector = createSelector(
	(state) => state.cocktails,
	(cocktails) => cocktails.searchTerm
);
