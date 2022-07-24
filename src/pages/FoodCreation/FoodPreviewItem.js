import React, { useContext, useState } from 'react'
import { FoodContext } from './FoodCreate'

const FoodPreviewItem = ({ item }) => {

  const initFullItem = {
    "name": item.name,
    "amount": 0,
    "unit": {item},
    "presentation": ""
  }
  const [presentationSelected, setPresentationSelected] = useState(null)
  const [fullItem, setFullItem] = useState(initFullItem)
  const { ingredients, setIngredients, previewFoodItems, setPreviewFoodItems } = useContext(FoodContext)

  const handleUpdate = (ingredient) => {
    let newData = previewFoodItems.map((ing) => (ing.name === ingredient.name ? ingredient : ing));
    setPreviewFoodItems(newData)
  }

  const handleDelete = (name) => {
    let newData = ingredients.filter((ing) => ing.name !== name);
    setIngredients(newData)
    let newPreview = previewFoodItems.filter((ing) => ing.name !== name);
    setPreviewFoodItems(newPreview)
  }

  const handleUnit = (e) =>{
    const newItem = fullItem
    newItem.unit = e.target.value 
    setFullItem(newItem)
    handleUpdate(newItem)
  }

  const handlePresentation = (e) => {
    const choice = e.target.value
    const index = item.presentations.findIndex(a => a.presentation === choice)
    const presentationObject = item.presentations[index]
    setPresentationSelected(presentationObject)
    const newItem = fullItem
    newItem.presentation = e.target.value 
    newItem.unit = presentationObject.allowed_units[0]
    setFullItem(newItem)
    handleUpdate(newItem)
  }

  const handleAmount = (e) =>{
    const newItem = fullItem
    newItem.amount = e.target.value 
    setFullItem(newItem)
    handleUpdate(newItem)
  }

  return (
    <tr>
      <td><label className="ms-2 me-5">- {item.name}</label></td>
      <td>
        <select onChange={handlePresentation} defaultValue="Seleccionar">
          {item.presentations.map((op) => (
            <option key={op.presentation} value={op.presentation}>{op.presentation}</option>
          ))}
        </select>
      </td>
      <td>
        <select onChange={handleUnit}>
          {/* <option selected>Seleccionar</option> */}
          { presentationSelected 
            ? presentationSelected.allowed_units.map((op) => (
              <option value={op} key={op}>{op}</option>
              ))
            : <option> Seleccionar</option>
          }
        </select>
      </td>
      <td><input type="number" min="0" value={item.amount} onChange={handleAmount}/></td>
      <td><button className="ms-3" onClick={() => handleDelete(item.name)}>Quitar</button></td>
    </tr>
  )
}

export default FoodPreviewItem