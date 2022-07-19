import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalWindowIsOpen: false,
};

const modalWindowSlice = createSlice({
	name: "modalWindowReducer",
	initialState,
	reducers: {
		showModalWindow: (state) => {
			state.modalWindowIsOpen = true;
		},
		hideModalWindow: (state) => {
			state.modalWindowIsOpen = false;
		},
	},
});

const { actions, reducer } = modalWindowSlice;

export default reducer;

export const { showModalWindow, hideModalWindow } = actions;
