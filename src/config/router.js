
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { history } from './init';
import { createMemoryHistory } from 'history';
import { MainRoutes, IngredientsRoutes, FoodRoutes } from './routePaths';

import FoodCreate from '../pages/FoodCreation/FoodCreate';
import NotFound from '../pages/NotFound/NotFound';

export default function RouterPaths() {

  const history = createMemoryHistory();

  return (
    // <Router history={history}>
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path={MainRoutes.Root} element={<Navigate to={FoodRoutes.Search}/>} />
        <Route path={FoodRoutes.Search} element={<FoodCreate/>}/>
        <Route path={IngredientsRoutes.Search} element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}