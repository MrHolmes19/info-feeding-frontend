import React from 'react'
import RadarChart from './RadarChart';

let chart = {
  //labels: ['Carbohidratos', 'Proteínas', 'Grasas saturadas', 'Grasas trans', 'Grasas no saturadas', 'Agua'],
  labels: ['Proteínas', 'Carbohidratos', 'Grasas totales', 'Agua'],
  datasets: [
    {
      label: '1',
      data: [0,0,0,0,0,0],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const ModalIngredient = ({item}) => {
  
  chart.datasets[0].label = item.name

  chart.datasets[0].data = [
    item["proteins"],
    item["total_carbohydrates"],
    item["total_fats"],
    item["water"],
  ]

  // console.log(chart.datasets[0].data)
  return (    
    <div className="modal fade" id="ingredientModal" tabIndex="-1" aria-labelledby="ingredientLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ingredientLabel">{item.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* ingredient image*/}
            {/*<ul>
              <li>Presentacion: {item.presentation} </li> 
            </ul>
            */}
            {/* List*/}
            <ul>
              {Object.keys(item).map((key, index) => 
                (index > 10 && item[key] != null) &&
                <li>
                  {`${key}: ${item[key]} gr`}
                </li>
              )}
            </ul>
            {/* chart*/}
            <RadarChart data={chart}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalIngredient