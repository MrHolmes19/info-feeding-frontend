import React, { useEffect } from 'react'
import { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import Input from './Input'
import TextArea from './TextArea'

const ModalFoodCreation = ({food}) => {
  
  const initialState = {
    ingredients: food,
    name: "",
    description: "",
    author: "",
    cooking_type: "",
    cooking_time: "",
    difficulty: "",
    portions: "",
    recipe: "",
    image: "",
    type: "",
    group: ""
  }

  const [foodForm, setFoodForm] = useState(initialState)
  
  useEffect(() => {
    setFoodForm({...foodForm, ingredients: food})
  
  }, [food])
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(foodForm)
    const endpoint = "http://127.0.0.1:8000/api/foods/"
    let options = {
      body: foodForm,
      headers: { "content-type": "application/json" },
    };
    helpHttp().post(endpoint, options).then((res) => {
      if (!res.err) {
        console.log(res)
      } else {
        console.log(res)
      }
    });
  }

  const handleChange = (e) =>{
    setFoodForm({
        ...foodForm,
        [e.target.name]: e.target.value,
    });
};

  return (    
    <div className="modal fade" id="foodModal" tabIndex="-1" aria-labelledby="foodLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="foodLabel">
              Complete la información de su comida
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

          {/* Formulario */}
          <form onSubmit={handleSubmit} id="food-form">
            <div className="mb-3 col-xs-2">
              <Input name="name" label="Nombre de esta comida" handleChange={handleChange}/>
              <TextArea name="description" label="Descripción" handleChange={handleChange} />
              <Input name="author" label="Autor" handleChange={handleChange} />
              <Input name="cooking_type" label="Tipo de cocción" handleChange={handleChange} />
              <Input name="cooking_time" label="Tiempo de cocción" handleChange={handleChange} />
              <Input name="portions" label="Porciones" handleChange={handleChange}/>
              <Input name="difficulty" label="Dificultad" handleChange={handleChange} />
              <TextArea name="recipe" label="Receta" handleChange={handleChange} />
              <Input name="image" label="imagen" handleChange={handleChange} />
              <Input name="type" label="Tipo" handleChange={handleChange} />
              <Input name="group" label="Grupo" handleChange={handleChange} />

              {/* <div id="emailHelp" className="form-text">Aca podemos poner algo</div> */}
            </div>
          </form>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            {/* <button type="submit" className="btn btn-success">Save food</button> */}            
            <input type="submit" form="food-form" value="Update" className="btn btn-success"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalFoodCreation