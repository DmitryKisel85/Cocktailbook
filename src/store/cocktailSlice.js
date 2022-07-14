import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [
		{
			id: 1,
			title: "Daiquiri",
			ingredients: "rum 60ml, lime juice 20ml, superfine sugar 2 spoons",
			method: "shake",
			glass: "cocktail glass",
		},
		{
			id: 2,
			title: "Negroni",
			ingredients: "gin 30ml, campari 30ml, sweet red vermouth 30ml",
			method: "build",
			glass: "old fashioned",
		},
		{
			id: 3,
			title: "Manhattan",
			ingredients: "rye whiskey 50ml, sweet red vermouth 20ml, Angostura bitters 1 dash",
			method: "stir",
			glass: "cocktail glass",
		},
	],
};

const cocktailSlice = createSlice({
	name: "cocktailReducer",
	initialState,
	reducers: {
		addCocktail: (state, action) => {
			state.cocktails.push(action.payload);
		},
	},
});

const { actions, reducer } = cocktailSlice;

export default reducer;

export const { addCocktail } = actions;
