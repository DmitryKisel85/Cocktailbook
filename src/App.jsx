import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CocktailPreviewPage from "./components/CocktailPreviewPage";
import NotFoundPage from "./components/NotFoundPage";

import styles from "./app.module.scss";

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/cocktail/:id' element={<CocktailPreviewPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
