//import logo from './logo.svg';
import './App.css';
import IngredientSearch from './components/IngredientSearch' ;
import {HashRouter, Routes, Route} from 'react-router-dom';
import FoodCreate from './components/FoodCreate';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/ingredient-search" element={<IngredientSearch/>}/> 
          <Route path="/food-creation" element={<FoodCreate/>}/>
          {/* 
          <Route path="/foods" element={<FoodSearch/>}/>
          <Route path="/foods/:id" element={<FoodDetails/>}/>
          <Route path="*" element={<Error404/>}/> 
          */}
        </Routes>
      </HashRouter>  

    </div>
  );
}

export default App;
