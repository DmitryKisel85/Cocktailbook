import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import CocktailPreviewPage from "./components/CocktailPreviewPage/CocktailPreviewPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cocktails/:id" element={<CocktailPreviewPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
