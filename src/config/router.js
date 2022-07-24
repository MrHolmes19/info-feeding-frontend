
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { history } from './init';
import { createMemoryHistory } from 'history';
import { MainRoutes, IngredientsRoutes, FoodRoutes } from './routePaths';

import FoodCreate from '../pages/FoodCreation/FoodCreate';
import NotFound from '../pages/NotFound/NotFound';
import IngredientSearch from '../pages/FoodCreation/IngredientSearch';

export default function RouterPaths() {

  const history = createMemoryHistory();

  return (
    // <Router history={history}>
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path={MainRoutes.Root} element={<Navigate to={FoodRoutes.Search}/>} />
        <Route path={FoodRoutes.Creation} element={<FoodCreate/>}/>
        <Route path={IngredientsRoutes.Search} element={<IngredientSearch/>}/>
      </Routes>
    </Router>
  )
}