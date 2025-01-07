import React from 'react'
import ReactMarkdown from 'react-markdown'
import IngredientsList from './IngredientsList'
import Recipe from './Recipe'
import { getRecipeFromClaude } from '../api/anthropic'


export default function Main() {
    const [ingredients, setMyIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")


    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromClaude(ingredients)
        setRecipe(recipeMarkdown)
        // console.log(recipeMarkdown)
    }

    function addIngredient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setMyIngredients(prevMyIngredients => [...prevMyIngredients, newIngredient])
        event.target.reset(); 
        // console.log(ingredients)
    }

    const ingredientsTitleText = 
    ingredients.length === 0 ? 
    "Enter at least 2 ingredients to start!"
    : "Ingredients on Hand";

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. cilantro"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            
             <IngredientsList 
            ingredients={ingredients}
            getRecipe={getRecipe}
            ingredientsTitleText={ingredientsTitleText}
            />
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}