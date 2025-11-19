import React from "react";
import { Routes, Route } from "react-router-dom";
import { RecipesListPage } from "./pages/RecipesListPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<RecipesListPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        </Routes>
    );
};

export default App;
