import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [
		{
			id: "1",
			name: "Daiquiri",
			ingredients: "rum 60ml, lime juice 20ml, superfine sugar 2 spoons",
			method: "shake",
			glass: "cocktail glass",
			imageUrl: "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
		},
		{
			id: "2",
			name: "Negroni",
			ingredients: "gin 30ml, campari 30ml, sweet red vermouth 30ml",
			method: "build",
			glass: "old fashioned",
			imageUrl: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
		},
		{
			id: "3",
			name: "Manhattan",
			ingredients: "rye whiskey 50ml, sweet red vermouth 20ml, Angostura bitters 1 dash",
			method: "stir",
			glass: "cocktail glass",
			imageUrl: "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg",
		},
	],
	searchTerm: "",
};

const cocktailSlice = createSlice({
	name: "cocktailReducer",
	initialState,
	reducers: {
		addCocktail: (state, action) => {
			state.cocktails.push(action.payload);
		},
		deleteCocktail: (state, action) => {
			state.cocktails = state.cocktails.filter((cocktail) => {
				return cocktail.id !== action.payload;
			});
		},
		editCocktail: (state, action) => {
			state.cocktails = state.cocktails.map((cocktail) => {
				if (cocktail.id === action.payload.id) {
					return {
						id: action.payload.id,
						...action.payload.data,
					};
				}
				return cocktail;
			});
		},
		searchCocktail: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
});

const { actions, reducer } = cocktailSlice;

export default reducer;

export const { addCocktail, deleteCocktail, editCocktail, searchCocktail } = actions;