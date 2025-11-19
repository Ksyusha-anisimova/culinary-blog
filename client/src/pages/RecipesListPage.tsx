import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import type { Recipe } from "../types";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";

export function RecipesListPage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetchRecipes().then(setRecipes);
    }, []);

    if (recipes.length === 0) return null;

    const last = recipes[0];

    return (
        <>
            <Header />
            <Hero recipe={last} />

            <main className="container">
                <h2 className="section-title">Рецепты</h2>

                <div className="recipes-grid">
                    {recipes.map((r) => (
                        <div key={r.id} className="recipes-card">
                            <div className="date">
                                {new Date(r.createdAt).toLocaleDateString("ru-RU")}
                            </div>
                            <h3>{r.title}</h3>
                            <div>{r.shortDescription}</div>
                            <Link to={`/recipes/${r.id}`} className="btn">Подробнее →</Link>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="footer">
                <div className="container">© 2025 — Кулинарный Блог</div>
            </footer>
        </>
    );
}
