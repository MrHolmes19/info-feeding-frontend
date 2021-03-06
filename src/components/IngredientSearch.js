import React, { useState, useEffect } from 'react';
import IngredientForm from './IngredientForm';
import Loader from './Loader';
import Response from './Response';
//import { helpHttp } from "../helpers/helpHttp";

const IngredientSearch = ({handleAdd, ingredients}) => {
  const [search, setSearch] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  

  const filterResponse = (ingFetched) => {
    const ingredientsFiltered = ingFetched.filter((el) => {
      return !ingredients.some((f) => {
        return f.name === el.name;
      });
    });
    return ingredientsFiltered
  }

  const removeSelf = (item) => {
    let filteredResponse = response.filter(
      (x) => x.name !== item.name
    )
    setResponse(filteredResponse)
  }

  const handleAddandRemove = (item) => {
    removeSelf(item)
    handleAdd(item)
  }


  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const {ing_name} = search;

      let endpoint = `http://127.0.0.1:8000/api/ingredients?name=${ing_name}`;

      setLoading(true);

      const [ingFetched] = await Promise.all([
        // helpHttp().get(endpoint),
        fetch(endpoint)
          .then((res) =>
            res.ok
              ? res.json()
              : Promise.reject({
                  err: true,
                  status: res.status || "00",
                  statusText: res.statusText || "Ocurrió un error",
                })
          )
          .catch((err) => (err))
      ]);
      // setResponse(ingFetched);
      const ingToShow = filterResponse(ingFetched)
      setResponse(ingToShow);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="row">
      <div className="col col-md-8 offset-md-2 col-lg-8 offset-lg-2">
        <p className="mb-4 fs-5">Ingresá el nombre de un alimento:</p>
        <IngredientForm handleSearch={handleSearch}/>
        {loading && <Loader/> }

        <hr></hr>

        <p className="mb-4 fs-5">Resultados:</p>  
              
        {search && !loading && (
          <Response response={response} handleAdd={handleAddandRemove}/>
        )}        
      </div>
    </div>
  )
}

export default IngredientSearch