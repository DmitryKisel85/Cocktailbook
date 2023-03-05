// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, setDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { ICocktail, IUpdateCocktailProps } from "types/generalTypes";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC-4jgVWXM_xg9hQGKHLnXFQZlhZy8YBMk",
	authDomain: "cocktaildb-42ab4.firebaseapp.com",
	projectId: "cocktaildb-42ab4",
	storageBucket: "cocktaildb-42ab4.appspot.com",
	messagingSenderId: "251364030508",
	appId: "1:251364030508:web:f0ad3ea011aea38f1d7989",
	measurementId: "G-NR46X5BE48",
};

// Initialize Firebase

// @ts-ignore
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const getCocktails = async () => {
	const querySnapshot = await getDocs(collection(db, "cocktails"));
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as ICocktail);
};
export const addCocktail = async (cocktail: ICocktail) => {
	await setDoc(doc(db, "cocktails", cocktail.id), cocktail);
};

export const removeCocktail = async (id: string) => {
	await deleteDoc(doc(db, "cocktails", id));
};

export const updateCocktail = async ({ id, data }: IUpdateCocktailProps) => {
	await updateDoc(doc(db, "cocktails", id), { ...data });
};
