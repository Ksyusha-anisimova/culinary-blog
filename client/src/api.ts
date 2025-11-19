const BASE_URL = "http://localhost:4000/api";

export async function fetchRecipes() {
    const res = await fetch(`${BASE_URL}/recipes`);
    return res.json();
}

export async function fetchRecipe(id: number) {
    const res = await fetch(`${BASE_URL}/recipes/${id}`);
    return res.json();
}
