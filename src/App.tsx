import { Routes, Route } from "react-router-dom";

import { HomePage } from "components/HomePage";
import { CocktailPreviewPage } from "components/CocktailPreviewPage";
import { NotFoundPage } from "components/NotFoundPage";

import s from "./App.module.scss";

function App() {
	return (
		<div className={s.root}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/cocktails/:id' element={<CocktailPreviewPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
