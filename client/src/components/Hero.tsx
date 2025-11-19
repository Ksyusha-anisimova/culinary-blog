import React from "react";
import type { Recipe } from "../types";

export function Hero({ recipe }: { recipe: Recipe }) {
    return (
        <section className="hero" style={{ backgroundImage: `url(http://localhost:4000${recipe.image})` }}>
            <div className="overlay"></div>
            <div className="container hero-content">
                <h1>{recipe.title}</h1>
                <p>{recipe.shortDescription}</p>
            </div>
        </section>
    );
}
