import { createSelector } from "@reduxjs/toolkit";

export const cocktailsSelector = createSelector(
	(state) => state.cocktails,
	(cocktails) => cocktails.cocktails
);

export const filteredCocktailsSelector = createSelector(
	(state) => state.cocktails.cocktails,
	(state) => state.cocktails.searchTerm,
	(cocktails, searchTerm) => {
		return cocktails.filter(
			(cocktail) => cocktail.name.toLowerCase().includes(searchTerm) || cocktail.ingredients.toLowerCase().includes(searchTerm) || cocktail.method.toLowerCase().includes(searchTerm) || cocktail.glass.toLowerCase().includes(searchTerm)
		);
	}
);

export const cocktailByIdSelector = (id) =>
	createSelector(
		(state) => state.cocktails,
		(cocktails) => cocktails.cocktails.filter((cocktail) => cocktail.id === id)
	);

export const searchTermSelector = createSelector(
	(state) => state.cocktails,
	(cocktails) => cocktails.searchTerm
);

export const isLoadingSelector = createSelector(
	(state) => state.cocktails,
	(cocktails) => cocktails.isLoading
);
