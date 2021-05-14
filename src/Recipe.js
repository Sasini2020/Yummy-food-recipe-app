import React from 'react';
import style from './recipe.module.css';//imported my css module

const Recipe = ({title,calories,image,ingredients }) => {
    return(
        <div className={style.recipe}>
            <h2 className={style.h2}>{title}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;