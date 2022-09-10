import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [],
	searchTerm: "",
	isLoading: false,
	error: null,
};

const cocktailSlice = createSlice({
	name: "cocktailReducer",
	initialState,
	reducers: {
		searchCocktail: (state, action) => {
			state.searchTerm = action.payload;
		},
		fetchCocktailsToListStart: (state, action) => {
			state.isLoading = true;
		},
		fetchCocktailsToListSuccess: (state, action) => {
			state.cocktails.push(...action.payload);
			state.isLoading = false;
		},
		fetchCocktailsToListError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		postCocktailsToListSuccess: (state, action) => {
			state.isLoading = false;
			state.cocktails.push(action.payload);
		},
		postCocktailToListStart: (state, action) => {
			state.isLoading = true;
		},
		postCocktailsToListError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		deleteCocktailFromListStart: (state, action) => {
			state.isLoading = true;
		},
		deleteCocktailFromListSuccess: (state, action) => {
			state.isLoading = false;
			state.cocktails = state.cocktails.filter((cocktail) => {
				return cocktail.id !== action.payload;
			});
		},
		deleteCocktailFromListError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		editCocktailInListStart: (state, action) => {
			state.isLoading = true;
		},
		editCocktailInListSuccess: (state, action) => {
			state.isLoading = false;
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
		editCocktailInListError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

const { actions, reducer } = cocktailSlice;

export default reducer;

export const {
	addCocktail,
	deleteCocktail,
	editCocktail,
	searchCocktail,
	fetchCocktailsToListStart,
	fetchCocktailsToListSuccess,
	fetchCocktailsToListError,
	postCocktailToListStart,
	postCocktailsToListError,
	postCocktailsToListSuccess,
	deleteCocktailFromListStart,
	deleteCocktailFromListSuccess,
	deleteCocktailFromListError,
	editCocktailInListStart,
	editCocktailInListSuccess,
	editCocktailInListError,
} = actions;
