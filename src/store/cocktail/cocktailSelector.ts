import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const cocktailsSelector = (state: RootState) => state.cocktails.cocktails;
export const searchTermSelector = (state: RootState) => state.cocktails.searchTerm;
export const isListLoadingSelector = (state: RootState) => state.cocktails.isLoading;
export const isCocktailLoadingSelector = (state: RootState) => state.cocktails.isCocktailLoading;

export const filteredCocktailsSelector = createSelector([cocktailsSelector, searchTermSelector], (cocktails, searchTerm) => {
	return cocktails.filter(
		(cocktail: { name: string; ingredients: string; method: string; glass: string }) =>
			cocktail.name.toLowerCase().includes(searchTerm) || cocktail.ingredients.toLowerCase().includes(searchTerm) || cocktail.method.toLowerCase().includes(searchTerm) || cocktail.glass.toLowerCase().includes(searchTerm)
	);
});

export const cocktailByIdSelector = (id: string) => createSelector([cocktailsSelector], (cocktails) => cocktails.filter((cocktail: { id: string }) => cocktail.id === id));
