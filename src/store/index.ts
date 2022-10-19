import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cocktailReducer from "./cocktail/cocktailSlice";
import modalWindowReducer from "./modal/modalWindowSlice";

import { cocktailSagas } from "./cocktail/cocktailSaga";

const rootReducer = combineReducers({
    cocktails: cocktailReducer,
    modalWindow: modalWindowReducer,
});

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["cocktails"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(cocktailSagas);

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
