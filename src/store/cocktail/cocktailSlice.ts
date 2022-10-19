import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICocktail, IFormValues } from "../../types/generalTypes";

interface CocktailInitialStateType {
    cocktails: ICocktail[];
    searchTerm: string;
    isLoading: boolean;
    error: null | string;
    isCocktailLoading: boolean;
}

const initialState: CocktailInitialStateType = {
    cocktails: [],
    searchTerm: "",
    isLoading: false,
    error: null,
    isCocktailLoading: false,
};

const cocktailSlice = createSlice({
    name: "cocktailReducer",
    initialState,
    reducers: {
        searchCocktail: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        fetchCocktailsToListStart: (state) => {
            state.isLoading = true;
        },
        fetchCocktailsToListSuccess: (state, action) => {
            state.cocktails.push(...action.payload);
            state.isLoading = false;
        },
        fetchCocktailsToListError: (state, action: PayloadAction<string | null>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        postCocktailToListSuccess: (state, action: PayloadAction<ICocktail>) => {
            state.isCocktailLoading = false;
            state.cocktails.push(action.payload);
        },
        postCocktailToListStart: (state, action: PayloadAction<ICocktail>) => {
            state.isCocktailLoading = true;
        },
        postCocktailToListError: (state, action: PayloadAction<string>) => {
            state.isCocktailLoading = false;
            state.error = action.payload;
        },
        deleteCocktailFromListStart: (state, action: PayloadAction<string>) => {
            state.isCocktailLoading = true;
        },
        deleteCocktailFromListSuccess: (state, action: PayloadAction<string>) => {
            state.isCocktailLoading = false;
            state.cocktails = state.cocktails.filter((cocktail) => {
                return cocktail.id !== action.payload;
            });
        },
        deleteCocktailFromListError: (state, action: PayloadAction<string>) => {
            state.isCocktailLoading = false;
            state.error = action.payload;
        },
        editCocktailInListStart: (state, action: PayloadAction<{ id: string; data: IFormValues }>) => {
            state.isCocktailLoading = true;
        },
        editCocktailInListSuccess: (state, action: PayloadAction<{ id: string; data: IFormValues }>) => {
            state.isCocktailLoading = false;
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
            state.isCocktailLoading = false;
            state.error = action.payload;
        },
    },
});

const { actions, reducer } = cocktailSlice;

export default reducer;

export const {
    searchCocktail,
    fetchCocktailsToListStart,
    fetchCocktailsToListSuccess,
    fetchCocktailsToListError,
    postCocktailToListStart,
    postCocktailToListError,
    postCocktailToListSuccess,
    deleteCocktailFromListStart,
    deleteCocktailFromListSuccess,
    deleteCocktailFromListError,
    editCocktailInListStart,
    editCocktailInListSuccess,
    editCocktailInListError,
} = actions;
