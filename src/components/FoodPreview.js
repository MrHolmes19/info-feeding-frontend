import React from 'react'
import { helpHttp } from '../helpers/helpHttp'
import FoodPreviewItem from './FoodPreviewItem'

const FoodPreview = ({ingredients, handleUpdate, handleDelete}) => {

  const handleSubmit = () =>{

    
    let data = {
      name: "Churrasco a la criolla",
      portions: 2,
      ingredients: ingredients
    }

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    let endpoint = "http://127.0.0.1:8000/api/foods"

    console.log("data a postear: ", data)
    helpHttp().post(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        console.log(res)
      } else {
        console.log(res)
      }
    });
  }

  return (
    <div>
      <p className="mb-4 fs-5">Lista de ingredientes para Nueva Comida</p>
      <div className="my-3">
        <table>
          <tbody>
            {ingredients.length > 0 ? (
              ingredients.map((el) => (
                <FoodPreviewItem
                  key={el.id}
                  item={el}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="3">Sin ingredientes aun</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-success mt-3" onClick={()=>handleSubmit()}>CREAR</button>
      </div>
    </div>
  )
}

export default FoodPreview