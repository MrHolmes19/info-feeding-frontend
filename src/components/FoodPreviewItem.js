import React, { useState } from 'react'

const FoodPreviewItem = ({item, handleUpdate, handleDelete}) => {

  const initFullItem = {
    "name": item.name,
    "amount": 0,
    "unit": {item},
    "presentation": ""
  }
  const [presentationSelected, setPresentationSelected] = useState(null)
  const [fullItem, setFullItem] = useState(initFullItem)

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
  // console.log("item: ", item, "presentations: ", item.presentations)
  // console.log("presentationSelected: ", presentationSelected)
  return (
    <tr>
      <td><label className="ms-2 me-5">- {item.name}</label></td>
      <td>
        <select onChange={handlePresentation}>
          <option selected>Seleccionar</option>
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
            : <option selected> Seleccionar</option> // <option selected>Elige presentacion</option>
          }
        </select>
      </td>
      <td><input type="number" min="0" value={item.amount} onChange={handleAmount}/></td>
      <td><button className="ms-3" onClick={() => handleDelete(item.name)}>Quitar</button></td>
    </tr>
  )
}

export default FoodPreviewItem