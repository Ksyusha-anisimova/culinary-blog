import React from "react";
import { Link } from "react-router-dom";
import type { Recipe } from "../types";

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <article className="recipe-card">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-card-img"
            />

            <h2 className="recipe-card-title">{recipe.title}</h2>

            <p className="recipe-card-desc">{recipe.shortDescription}</p>

            <Link to={`/recipes/${recipe.id}`} className="recipe-card-btn">
                Читать
            </Link>
        </article>
    );
};
