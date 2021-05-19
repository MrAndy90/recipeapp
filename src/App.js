import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "12e3bacd";
  const APP_KEY = "9ede987946f451e821401a575e67980a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    //
    // else}
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);

    console.log("search " + search);
    {
      if (search == "$" || search == "€") {
        alert("no money signs!");
      } else {
        setSearch("");
      }
    }

    setSearch("");
  };

  return (
    <div className="App">
      <img src="CookingFromHome.jpg" alt=""></img>
      <form onSubmit={getSearch} className="search-form">
        <input
          required
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="What would you like to eat today?"
        />

        <button className="search-button" type="submit">
          Feed Me!
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
