import { writeBatch } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs, doc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { ICocktail } from "types/generalTypes";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const getCocktails = async (): Promise<ICocktail[]> => {
    const collectionRef = collection(db, "cocktails");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as ICocktail);
};

export const addCocktail = async (cocktail: ICocktail) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "cocktails");

    const docRef = doc(collectionRef, cocktail.name.toLowerCase());
    batch.set(docRef, cocktail);

    await batch.commit();
};

export const removeCocktail = async (name: string) => {
    await deleteDoc(doc(db, "cocktails", name));
};
