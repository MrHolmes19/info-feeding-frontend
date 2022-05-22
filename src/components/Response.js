import React, { useState } from 'react'
import IngredientListItem from './IngredientListItem';
import ModalIngredient from './ModalIngredient';

const Response = ({response, handleAdd}) => {

  const [selectedItem, setSelectedItem] = useState(null)

  const handleOnClick = (data) => {
    setSelectedItem(data);
  };

  if(!response) return null;
  return (
    <div>      
      {response.err 
      ? 
        <p className="fs-4 text-danger">
        "No existe un alimento con ese nombre en nuestra base de datos."
        </p>
      :
        <div className="fs-3 text-success">
          {response.map(ingredient => 
          <IngredientListItem handleOnClick={handleOnClick} item = {ingredient} key={ingredient.id} 
          add={true} handleAdd={handleAdd}/>)}
        </div>
      }
      {selectedItem && <ModalIngredient item = {selectedItem}/>}
    </div>
  )
}

export default Response