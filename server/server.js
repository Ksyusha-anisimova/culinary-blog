const express = require("express");
const cors = require("cors");
const path = require("path");

const recipes = require("./recipesData");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// раздача картинок
app.use("/images", express.static(path.join(__dirname, "images")));

// список рецептов
app.get("/api/recipes", (req, res) => {
    res.json(recipes);
});

// рецепт по ID
app.get("/api/recipes/:id", (req, res) => {
    const id = Number(req.params.id);
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) return res.status(404).json({ error: "not found" });

    res.json(recipe);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
