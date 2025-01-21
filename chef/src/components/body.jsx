import React from 'react';

function Body() {
    //states 
    const [ingredients, setIngredients] = React.useState([])
    //state for recipe
    const [visibleRecipe, setVisibleRecipe] = React.useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    //visible function
    function showRecipe() {
        if (ingredientsListItems.length >= 0) {
            setVisibleRecipe(true)
        }
    }

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
                    required
                />
                <button onClick={showRecipe}>Add ingredient</button>
            </form>
        </main>
        <div style={{ display: visibleRecipe ? 'block' : 'none' }}>
            <div className='section-container' >
                <section>
                    <h2>Ingreients on hand:</h2>
                    <ul>
                        { ingredientsListItems }
                    </ul>
                    <div className='get-recipe-container'>
                        <div>
                            <h4>Ready for recipe?</h4>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get recipe</button>
                    </div>
                </section>
            </div>
        </div>
    </>
  );
}

export default Body;