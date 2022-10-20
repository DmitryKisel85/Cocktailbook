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

import { getCocktails, addCocktail, removeCocktail } from "../../firebase/firebase";

import { ICocktail, ICocktailAction, IEditCocktailAction, IDeleteCocktailAction } from "types/generalTypes";

// function* fetchCocktailsFromApi() {
//     try {
//         const fetchedCocktails: Promise<ICocktail[]> = yield call(fetchCocktails, API_URL);
//         yield put(fetchCocktailsToListSuccess(fetchedCocktails));
//     } catch (error) {
//         if (error instanceof Error) {
//             yield put(fetchCocktailsToListError(error.message));
//         }
//     }
// }
function* fetchCocktailsFromApi() {
    try {
        const fetchedCocktails: Promise<ICocktail[]> = yield call(getCocktails);
        yield put(fetchCocktailsToListSuccess(fetchedCocktails));
    } catch (error) {
        if (error instanceof Error) {
            yield put(fetchCocktailsToListError(error.message));
        }
    }
}

function* postCocktailToApi({ payload }: ICocktailAction) {
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
// function* postCocktailToApi({ payload }: ICocktailAction) {
//     try {
//         yield call(postNewCocktail, API_URL, payload);
//         yield put(postCocktailToListSuccess(payload));
//         yield put(hideModalWindow());
//     } catch (error) {
//         if (error instanceof Error) {
//             yield put(postCocktailToListError(error.message));
//         }
//     }
// }

function* deleteCocktailFromApi({ payload }: IDeleteCocktailAction) {
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
// function* deleteCocktailFromApi({ payload }: IDeleteCocktailAction) {
//     try {
//         yield call(deleteCocktail, API_URL, payload);
//         yield put(deleteCocktailFromListSuccess(payload));
//         yield put(hideModalWindow());
//     } catch (error) {
//         if (error instanceof Error) {
//             yield put(deleteCocktailFromListError(error.message));
//         }
//     }
// }

function* editCocktailInApi({ payload }: IEditCocktailAction) {
    try {
        yield call(editCocktail, API_URL, payload);
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
