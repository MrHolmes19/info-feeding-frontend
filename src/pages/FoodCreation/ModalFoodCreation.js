import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { helpHttp } from '../../helpers/helpHttp'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import { FoodContext } from './FoodCreate'

const ModalFoodCreation = () => {
  
  const { previewFoodItems: food } = useContext(FoodContext)

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
    // image: "",
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

    let formData = new FormData()
    Object.entries(foodForm).map((foodItem)=>(
      typeof(foodItem[1])==="object" && foodItem[1] !== undefined
      ? formData.append(`${foodItem[0]}`, JSON.stringify(foodItem[1]))
      : formData.append(`${foodItem[0]}`, foodItem[1])
    ))
    
    console.log("formData: ", ...formData)
    let options = {
      // body: formData,
      // headers: { "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW" },
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
              Complete la informaci??n de su comida
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

          {/* Formulario */}
          <form onSubmit={handleSubmit} id="food-form">
            <div className="mb-3 col-xs-2">
              <Input name="name" label="Nombre de esta comida" handleChange={handleChange}/>
              <TextArea name="description" label="Descripci??n" handleChange={handleChange} />
              <Input name="author" label="Autor" handleChange={handleChange} />
              <Input name="cooking_type" label="Tipo de cocci??n" handleChange={handleChange} />
              <Input name="cooking_time" label="Tiempo de cocci??n" handleChange={handleChange} />
              <Input name="portions" label="Porciones" handleChange={handleChange}/>
              <Input name="difficulty" label="Dificultad" handleChange={handleChange} />
              <TextArea name="recipe" label="Receta" handleChange={handleChange} />
              {/* <input type="file" name="image" label="imagen" handleChange={handleChange} /> */}
              <Input name="type" label="Tipo" handleChange={handleChange} />
              <Input name="group" label="Grupo" handleChange={handleChange} />

              {/* <div id="emailHelp" className="form-text">Aca podemos poner algo</div> */}
            </div>
          </form>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <input type="submit" form="food-form" value="Create" className="btn btn-success"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalFoodCreation