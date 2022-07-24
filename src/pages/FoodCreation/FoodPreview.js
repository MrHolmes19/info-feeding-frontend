import React, { useContext } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import FoodPreviewItem from './FoodPreviewItem'
import {FoodContext} from './FoodCreate'

const FoodPreview = () => {

  const { ingredients } = useContext(FoodContext)

  return (
    <div>
      <p className="mb-4 fs-5">Lista de ingredientes para Nueva Comida</p>
      <div className="my-3">
        <table>
          <tbody>
            {ingredients.length > 0 
            ? (ingredients.map((el) => (
                <FoodPreviewItem key={el.name} item={el}/>
              ))
            ) : (
              <tr>
                <td colSpan="3">Sin ingredientes aun</td>
              </tr>
            )}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#foodModal">
          CREAR
        </button>
      </div>
    </div>
  )
}

export default FoodPreview