import React, { useState } from 'react'
import FoodPreview from './FoodPreview'
import IngredientSearch from './IngredientSearch'

const FoodCreate = () => {

  const [ingredients, setIngredients] = useState([])

  const handleAdd = (ingredient) => {
    ingredient = {id: ingredient.id, name: ingredient.name, amount: 0, unit: "g"}
    setIngredients([...ingredients, ingredient])
  }

  const handleUpdate = (ingredient) => {
    let newData = ingredients.map((ing) => (ing.id === ingredient.id ? ingredient : ing));
    setIngredients(newData)
  }

  const handleDelete = (id) => {
    let newData = ingredients.filter((ing) => ing.id !== id);
    setIngredients(newData)
  }

  return (
    <div className="container container-fluid">
      <h1> Creación de comida a partir de ingredientes</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <IngredientSearch handleAdd={handleAdd}/>
        </div>
        <div className="col-12 col-md-6">
          <FoodPreview ingredients = {ingredients} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default FoodCreate