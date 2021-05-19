import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul id={style.ul1}>
        <h3 className={style.ingredients}>Ingredients</h3>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.calories}>Calories: {Math.round(calories)}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
