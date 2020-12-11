import React from "react";
// import style from "./recipe.module.css";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients, energy }) => {
  return (
    <div className="recipe">
      <div className="recipe-head">
        <div className="recipe-title">{title}</div>
        <div>
          <img src={image} alt={title} className="recipe-image" />
        </div>
      </div>
      <div className="recipe-info">
        <p>
          <b>Calories:</b> {calories}s
        </p>
        <b>Ingridents:</b>
        {ingredients.map((ingredient) => (
          <ul>
            <li>{ingredient.text}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
