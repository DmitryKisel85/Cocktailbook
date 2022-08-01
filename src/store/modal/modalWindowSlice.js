import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalWindowIsOpen: false,
	typeOfModalWindow: "",
	previewCocktail: {},
};

const modalWindowSlice = createSlice({
	name: "modalWindowReducer",
	initialState,
	reducers: {
		showModalWindow: (state, action) => {
			state.modalWindowIsOpen = true;
			state.typeOfModalWindow = action.payload.typeOfModalWindow;
			state.previewCocktail = action.payload.previewCocktail;
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
