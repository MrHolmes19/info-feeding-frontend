import React, { useEffect, useState } from 'react'
import FoodPreview from './FoodPreview'
import IngredientSearch from './IngredientSearch'
import ModalFoodCreation from './ModalFoodCreation'

const FoodCreate = () => {

  const [ingredients, setIngredients] = useState([])
  const [previewFoodItems, setPreviewFoodItems] = useState([])
  console.log("state ingredients: ",ingredients)
  console.log("state preview: ", previewFoodItems)

  const handleAdd = (ingredient) => {
    //ingredient = {id: ingredient.id, name: ingredient.name, amount: 0, unit: "g"}
    setIngredients([...ingredients, ingredient])
    const newPreviewItem = {
      "name": ingredient.name,
      "amount": 0,
      "unit": "",
      "presentation": ""
    }
    setPreviewFoodItems([...previewFoodItems, newPreviewItem])
  }

  const handleUpdate = (ingredient) => {
    let newData = previewFoodItems.map((ing) => (ing.name === ingredient.name ? ingredient : ing));
    setPreviewFoodItems(newData)
    // console.log("Ingredients updated: ",ingredients)
  }

  const handleDelete = (name) => {
    // console.log("remove: ",name)
    let newData = ingredients.filter((ing) => ing.name !== name);
    setIngredients(newData)
    let newPreview = previewFoodItems.filter((ing) => ing.name !== name);
    setPreviewFoodItems(newPreview)
  }

  return (
    <div className="container container-fluid">
      <h1> Creación de comida a partir de ingredientes</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <IngredientSearch handleAdd={handleAdd} ingredients={ingredients}/>
        </div>
        <div className="col-12 col-md-6">
          <FoodPreview ingredients = {ingredients} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        </div>
      </div>
      <ModalFoodCreation food={previewFoodItems}/>
    </div>
  )
}

export default FoodCreate