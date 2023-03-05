import { all, call, put, takeEvery } from "redux-saga/effects";

import {
	fetchCocktailsToListStart,
	fetchCocktailsToListSuccess,
	fetchCocktailsToListError,
	postCocktailToListError,
	postCocktailToListSuccess,
	postCocktailToListStart,
	deleteCocktailFromListStart,
	deleteCocktailFromListSuccess,
	deleteCocktailFromListError,
	editCocktailInListStart,
	editCocktailInListSuccess,
	editCocktailInListError,
} from "./cocktailSlice";
import { hideModalWindow } from "store/modal/modalWindowSlice";

import { getCocktails, addCocktail, removeCocktail, updateCocktail } from "firebaseData";

import { ICocktail, IDeleteCocktailActionPayload, IEditCocktailActionPayload, IPostCocktailActionPayload } from "types";

function* fetchCocktailsFromApi() {
	try {
		const fetchedCocktails: ICocktail[] = yield call(getCocktails);
		yield put(fetchCocktailsToListSuccess(fetchedCocktails));
	} catch (error) {
		if (error instanceof Error) {
			yield put(fetchCocktailsToListError(error.message));
		} else {
			if (typeof error === "string") {
				yield put(postCocktailToListError(error));
			}
		}
	}
}

function* postCocktailToApi({ payload }: IPostCocktailActionPayload) {
	try {
		yield call(addCocktail, payload);
		yield put(postCocktailToListSuccess());
		yield put(hideModalWindow());
	} catch (error) {
		if (error instanceof Error) {
			yield put(postCocktailToListError(error.message));
		} else {
			if (typeof error === "string") {
				yield put(postCocktailToListError(error));
			}
		}
	}
}

function* deleteCocktailFromApi({ payload }: IDeleteCocktailActionPayload) {
	try {
		yield call(removeCocktail, payload);
		yield put(deleteCocktailFromListSuccess());
		yield put(hideModalWindow());
	} catch (error) {
		if (error instanceof Error) {
			yield put(deleteCocktailFromListError(error.message));
		} else {
			if (typeof error === "string") {
				yield put(postCocktailToListError(error));
			}
		}
	}
}

function* editCocktailInApi({ payload }: IEditCocktailActionPayload) {
	try {
		yield call(updateCocktail, payload);
		yield put(editCocktailInListSuccess());
		yield put(hideModalWindow());
	} catch (error) {
		if (error instanceof Error) {
			yield put(editCocktailInListError(error.message));
		} else {
			if (typeof error === "string") {
				yield put(postCocktailToListError(error));
			}
		}
	}
}

export function* cocktailSagas() {
	yield all([
		takeEvery(deleteCocktailFromListStart.type, deleteCocktailFromApi),
		takeEvery(postCocktailToListStart.type, postCocktailToApi),
		takeEvery(editCocktailInListStart.type, editCocktailInApi),
		takeEvery(fetchCocktailsToListStart.type, fetchCocktailsFromApi),
	]);
}
