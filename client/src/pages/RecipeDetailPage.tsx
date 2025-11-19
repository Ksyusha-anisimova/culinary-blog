import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipe } from "../api";
import type { Recipe } from "../types";
import { Header } from "../components/Header";

export function RecipeDetailPage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        fetchRecipe(Number(id)).then(setRecipe);
    }, [id]);

    if (!recipe) return null;

    return (
        <>
            <Header />

            <main className="container detail-page">
                <p className="breadcrumb">
                    Главная / {recipe.title}
                </p>

                <h1>{recipe.title}</h1>

                <div className="detail-content">
                    <div className="detail-text">
                        <p className="date">
                            {new Date(recipe.createdAt).toLocaleDateString("ru-RU")}
                        </p>

                        <div className="subtitle">{recipe.shortDescription}</div>

                        <div className="content">{recipe.content}</div>

                        <Link to="/" className="btn back">← Назад к новостям</Link>
                    </div>

                    <div className="detail-image">
                        <img src={`http://localhost:4000${recipe.image}`} alt={recipe.title} />
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">© 2025 — Кулинарный Блог</div>
            </footer>
        </>
    );
}
