import React, { useState, useEffect } from "react";
import Loading from "../component/Loading";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function SingleCocktail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  console.log(`${url}${id}`)
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data.drinks)
        if(data.drinks){
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients= [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ]
          const newCocktail= {
            name,
            image,
            info,
            category,
            glass,
            instruction,
            ingredients
          }
          setCocktail(newCocktail);
          console.log(cocktail)
        }else{
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getCocktail();
  },[id]);

  if(loading){
    return<Loading />
  }
   if(!cocktail){
    return <h1>there no cocktail</h1>
   }

  const {name,
    image,
    info,
    category,
    glass,
    instruction,
    ingredients} = cocktail

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">Back Home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instruction:</span>
            {instruction}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((items, index) =>{
              return items? <span key={index}>{items}</span>:null
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
