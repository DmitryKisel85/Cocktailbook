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

import { getCocktails, addCocktail, removeCocktail, updateCocktail } from "../../firebase/firebase";

import {
    ICocktail,
    IDeleteCocktailActionPayload,
    IEditCocktailActionPayload,
    IPostCocktailActionPayload,
} from "types/generalTypes";

function* fetchCocktailsFromApi() {
    try {
        const fetchedCocktails: ICocktail[] = yield call(getCocktails);
        yield put(fetchCocktailsToListSuccess(fetchedCocktails));
    } catch (error) {
        if (error instanceof Error) {
            yield put(fetchCocktailsToListError(error.message));
        }
    }
}

function* postCocktailToApi({ payload }: IPostCocktailActionPayload) {
    try {
        yield call(addCocktail, payload);
        yield put(postCocktailToListSuccess(payload));
        yield put(hideModalWindow());
    } catch (error) {
        if (error instanceof Error) {
            yield put(postCocktailToListError(error.message));
        }
    }
}

function* deleteCocktailFromApi({ payload }: IDeleteCocktailActionPayload) {
    try {
        yield call(removeCocktail, payload);
        yield put(deleteCocktailFromListSuccess(payload));
        yield put(hideModalWindow());
    } catch (error) {
        if (error instanceof Error) {
            yield put(deleteCocktailFromListError(error.message));
        }
    }
}

function* editCocktailInApi({ payload }: IEditCocktailActionPayload) {
    try {
        yield call(updateCocktail, payload);
        yield put(editCocktailInListSuccess(payload));
        yield put(hideModalWindow());
    } catch (error) {
        if (error instanceof Error) {
            yield put(editCocktailInListError(error.message));
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
