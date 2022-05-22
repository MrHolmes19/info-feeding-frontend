import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button } from 'react-bootstrap';

const initialForm = {
  ing_name: "",
};

const IngredientForm = ({handleSearch}) => {

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.ing_name) {
      alert("Por favor, ingresá algo");
      return;
    }

    handleSearch(form);
    //setForm(initialForm);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 col-xs-2">
          <div className="form-group row">
            <label htmlFor="ing_name" className="col-sm-3 col-form-label text-sm-end">Nombre del ingrediente:</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="ing_name" 
              aria-describedby="emailHelp" 
              placeholder='Berenjena' 
              name="ing_name"
              onChange={handleChange}
              value={form.ing_name}/>
            </div>
          </div>
          <div id="emailHelp" className="form-text">Aca podemos poner algo</div>
        </div>

        <button type="submit" className="btn btn-primary">Consultar</button>
      </form>
    </div>
  )
}

export default IngredientForm