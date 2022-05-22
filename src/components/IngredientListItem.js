import React from 'react'

const IngredientListItem = ({item , add, handleOnClick, handleAdd}) => {

  return (
    <div>
      <div>
        {item.name}
      </div>
      <div>      
      
      <button type="button" className="btn btn-primary" 
      data-bs-toggle="modal" data-bs-target="#ingredientModal"
      onClick = {()=>handleOnClick(item)}>
        VER
      </button>

      </div>
      <div>
        {add && 
          <button type="button" className="btn btn-primary" 
           onClick = {()=>handleAdd(item)}>
            +
          </button>
        }
      </div>

    </div>
  )
}

export default IngredientListItem