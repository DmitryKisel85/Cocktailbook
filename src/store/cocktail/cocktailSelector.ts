import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const cocktailsSelector = createSelector(
    (state: RootState) => state.cocktails,
    (cocktails) => cocktails.cocktails
);

export const filteredCocktailsSelector = createSelector(
    (state: RootState) => state.cocktails.cocktails,
    (state: RootState) => state.cocktails.searchTerm,
    (cocktails, searchTerm) => {
        return cocktails.filter(
            (cocktail) =>
                cocktail.name.toLowerCase().includes(searchTerm) ||
                cocktail.ingredients.toLowerCase().includes(searchTerm) ||
                cocktail.method.toLowerCase().includes(searchTerm) ||
                cocktail.glass.toLowerCase().includes(searchTerm)
        );
    }
);

export const cocktailByIdSelector = (id: string) =>
    createSelector(
        (state: RootState) => state.cocktails,
        (cocktails) => cocktails.cocktails.filter((cocktail) => cocktail.id === id)
    );

export const searchTermSelector = createSelector(
    (state: RootState) => state.cocktails,
    (cocktails) => cocktails.searchTerm
);

export const isLoadingSelector = createSelector(
    (state: RootState) => state.cocktails,
    (cocktails) => cocktails.isLoading
);

export const isCocktailLoadingSelector = createSelector(
    (state: RootState) => state.cocktails,
    (cocktails) => cocktails.isCocktailLoading
);
