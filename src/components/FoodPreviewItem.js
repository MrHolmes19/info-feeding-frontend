import React from 'react'

const FoodPreviewItem = ({item, handleUpdate, handleDelete}) => {

  const handleSelect = (e) =>{
    item.unit = e.target.value
    handleUpdate(item)
  }

  const handleAmount = (e) =>{
    item.amount = e.target.value
    handleUpdate(item)
  }

  return (
    <tr>
      <td><label className="ms-2 me-5">- {item.name}</label></td>
      <td><input type="number" min="0" value={item.amount} onChange={handleAmount}/></td>
      <td>
        <select onChange={handleSelect}>
          <option value="g">g</option>
          <option value="ml">ml</option>
          <option value="cm3">cm3</option>
        </select>
      </td>
      <td><button className="ms-3" onClick={() => handleDelete(item.id)}>Quitar</button></td>
    </tr>
  )
}

export default FoodPreviewItem