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