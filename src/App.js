import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "9e5203ad";
  const APP_KEY = "8af5277fc3906a1f91c93874d4dd5f93";

  const [recipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setReceipes(data.hits);
    console.log("data" + data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log("updateSearch");
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          required
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="What would you like?"
        />
        {function validateForm() {
          if (updateSearch == "$" || "@") {
            alert("Please do not use special characters");
            return false;
            console.log("updateSearch1" + updateSearch);
          }
        }}
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className={"recipes"}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
