import React, { useState } from 'react'
import IngredientListItem from './IngredientListItem';
import ModalIngredient from './ModalIngredient';

const initItem = {
  name : '',
  proteins: 0,
  water: 0,
  total_carbohydrates: 0,
  total_fats: 0,

}

const Response = ({response, handleAdd}) => {

  const [selectedItem, setSelectedItem] = useState(initItem)

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
          {response.map((ingredient) => 
            <IngredientListItem 
              key={ingredient.name} 
              handleOnClick={handleOnClick} 
              item={ingredient} 
              add={true} handleAdd={handleAdd}
            />
          )}
        </div>
      }
      {/* {selectedItem && <ModalIngredient item = {selectedItem}/>} */}
      <ModalIngredient item = {selectedItem}/>
    </div>
  )
}

export default Response