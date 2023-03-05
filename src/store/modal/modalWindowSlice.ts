import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICocktail } from "types";

interface InitialState {
	modalWindowIsOpen: boolean;
	typeOfModalWindow: string;
	previewCocktail: ICocktail;
}

const initialState: InitialState = {
	modalWindowIsOpen: false,
	typeOfModalWindow: "",
	previewCocktail: {
		id: "",
		name: "",
		ingredients: "",
		method: "",
		glass: "",
		imageUrl: "",
	},
};

const modalWindowSlice = createSlice({
	name: "modalWindowReducer",
	initialState,
	reducers: {
		showModalWindow: (state, action: PayloadAction<{ typeOfModalWindow: string; previewCocktail?: ICocktail }>) => {
			state.modalWindowIsOpen = true;
			state.typeOfModalWindow = action.payload.typeOfModalWindow;
			if (action.payload.previewCocktail) {
				state.previewCocktail = action.payload.previewCocktail;
			}
		},
		hideModalWindow: (state) => {
			state.modalWindowIsOpen = false;
			state.typeOfModalWindow = "";
		},
	},
});

const { actions, reducer } = modalWindowSlice;

export default reducer;

export const { showModalWindow, hideModalWindow } = actions;
