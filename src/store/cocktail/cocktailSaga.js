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

import { hideModalWindow } from "../modal/modalWindowSlice";

import { API_URL } from "../../services/config";

import { fetchCocktails, postNewCocktail, deleteCocktail, editCocktail } from "../../services/api";

function* fetchCocktailsFromApi() {
    try {
        const fetchedCocktails = yield call(fetchCocktails, API_URL);
        yield put(fetchCocktailsToListSuccess(fetchedCocktails));
    } catch (error) {
        yield put(fetchCocktailsToListError(error));
    }
}

function* postCocktailToApi({ payload }) {
    try {
        yield call(postNewCocktail, API_URL, payload);
        yield put(postCocktailToListSuccess(payload));
        yield put(hideModalWindow());
    } catch (error) {
        yield put(postCocktailToListError(error));
    }
}

function* deleteCocktailFromApi({ payload }) {
    try {
        yield call(deleteCocktail, API_URL, payload);
        yield put(deleteCocktailFromListSuccess(payload));
        yield put(hideModalWindow());
    } catch (error) {
        yield put(deleteCocktailFromListError(error));
    }
}

function* editCocktailInApi({ payload }) {
    try {
        yield call(editCocktail, API_URL, payload);
        yield put(editCocktailInListSuccess(payload));
        yield put(hideModalWindow());
    } catch (error) {
        yield put(editCocktailInListError(error));
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
