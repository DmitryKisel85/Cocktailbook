import { all, call, put, takeEvery } from "redux-saga/effects";

import {
	fetchCocktailsToListStart,
	fetchCocktailsToListSuccess,
	fetchCocktailsToListError,
	postCocktailsToListError,
	postCocktailsToListSuccess,
	postCocktailToListStart,
	deleteCocktailFromListStart,
	deleteCocktailFromListSuccess,
	deleteCocktailFromListError,
	editCocktailInListStart,
	editCocktailInListSuccess,
	editCocktailInListError,
} from "./cocktailSlice";

import { COCKTAILS_FETCH_START, NEW_COCKTAIL_POST_START, COCKTAIL_DELETE_START, COCKTAIL_EDIT_START } from "./cocktailActions";

import { API_URL } from "../../services/config";

import { fetchCocktails, postNewCocktail, deleteCocktail, editCocktail } from "../../services/api";

function* fetchCocktailsFromApi() {
	try {
		yield put(fetchCocktailsToListStart());
		const fetchedCocktails = yield call(fetchCocktails, API_URL);
		yield put(fetchCocktailsToListSuccess(fetchedCocktails));
	} catch (error) {
		yield put(fetchCocktailsToListError(error));
	}
}

function* postCocktailToApi({ payload }) {
	try {
		yield put(postCocktailToListStart());
		yield call(postNewCocktail, API_URL, payload);
		yield put(postCocktailsToListSuccess(payload));
	} catch (error) {
		yield put(postCocktailsToListError(error));
	}
}

function* deleteCocktailFromApi({ payload }) {
	try {
		yield put(deleteCocktailFromListStart());
		yield call(deleteCocktail, API_URL, payload);
		yield put(deleteCocktailFromListSuccess(payload));
	} catch (error) {
		yield put(deleteCocktailFromListError(error));
	}
}

function* editCocktailInApi({ payload }) {
	try {
		yield put(editCocktailInListStart());
		yield call(editCocktail, API_URL, payload);
		yield put(editCocktailInListSuccess(payload));
	} catch (error) {
		yield put(editCocktailInListError(error));
	}
}

function* watchFetchCocktailsFromApiSaga() {
	yield takeEvery(COCKTAILS_FETCH_START, fetchCocktailsFromApi);
}

function* watchPostCocktailToApiSaga() {
	yield takeEvery(NEW_COCKTAIL_POST_START, postCocktailToApi);
}

function* watchDeleteCocktailFromApiSaga() {
	yield takeEvery(COCKTAIL_DELETE_START, deleteCocktailFromApi);
}

function* watchEditCocktailInApiSaga() {
	yield takeEvery(COCKTAIL_EDIT_START, editCocktailInApi);
}

export function* cocktailSagas() {
	yield all([call(watchFetchCocktailsFromApiSaga), call(watchPostCocktailToApiSaga), call(watchDeleteCocktailFromApiSaga), call(watchEditCocktailInApiSaga)]);
}
