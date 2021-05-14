import React,{ useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "97e4756e";
  const APP_KEY = "b411e652c5028d44cd7580092e638d67";

  const [recipes, setRecipes] = useState([]);
  //For search bar (searching process)
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('rolls');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
 
  const updateSearch = e => {
    setSearch(e.target.value);//value of the object and handle error (if you got error in search then this event will execute)
   
  };
 
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return ( 
    <div className="App">

    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search your food item Here..." />
      <button className="search-button" type="submit">Go</button>
    </form>

    <div className="recipes">
    {recipes.map(recipe =>(
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
