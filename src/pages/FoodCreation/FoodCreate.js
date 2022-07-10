import { useState, createContext } from 'react'
import FoodPreview from './FoodPreview'
import IngredientSearch from './IngredientSearch'
import ModalFoodCreation from './ModalFoodCreation'

const FoodContext = createContext()

function FoodCreationProvider({ children }){
  const [ingredients, setIngredients] = useState([])
  const [previewFoodItems, setPreviewFoodItems] = useState([])

  return (
    <FoodContext.Provider value={{
      ingredients, setIngredients,
      previewFoodItems, setPreviewFoodItems
    }}>
      { children }
    </FoodContext.Provider>
  )
}

const FoodCreate = () => {

  return (
    <FoodCreationProvider>
      <div className="container container-fluid">
        <h1> Creación de comida a partir de ingredientes</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <IngredientSearch/>
          </div>
          <div className="col-12 col-md-6">
            <FoodPreview/>
          </div>
        </div>
        <ModalFoodCreation/>
      </div>
    </FoodCreationProvider>
  )
}

export default FoodCreate