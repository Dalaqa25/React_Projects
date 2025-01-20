import React from 'react';

function Body() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

  return (
    <>
        <main>
            <form action={ addIngredient } className="add-ingrediance-from">
                <input 
                    type="text" 
                    name="ingredient"
                    placeholder="e.g. oregano" 
                />
                <button>Add ingredient</button>
            </form>
        </main>
        <ul>
            { ingredientsListItems }
        </ul>
    </>
  );
}

export default Body;