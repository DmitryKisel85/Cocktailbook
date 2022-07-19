import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cocktailReducer from "./cocktailSlice";
import modalWindowReducer from "./modalWindowSlice";

const rootReducer = combineReducers({
	cocktails: cocktailReducer,
	modalWindow: modalWindowReducer,
});

const persistConfig = {
	key: "root",
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	// devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
