import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalWindowIsOpen: false,
	typeOfModalWindow: "",
};

const modalWindowSlice = createSlice({
	name: "modalWindowReducer",
	initialState,
	reducers: {
		showModalWindow: (state, action) => {
			state.modalWindowIsOpen = true;
			state.typeOfModalWindow = action.payload;
		},
		hideModalWindow: (state) => {
			state.modalWindowIsOpen = false;
		},
	},
});

const { actions, reducer } = modalWindowSlice;

export default reducer;

export const { showModalWindow, hideModalWindow } = actions;
