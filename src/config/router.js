
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { history } from './init';
import { MainRoutes, IngredientsRoutes, FoodRoutes } from './routePaths';

import FoodCreate from '../components/FoodCreate';
import NotFound from '../pages/NotFound/NotFound';

export default function RouterPaths() {
  return (
    // <Router history={history}>
    <Router>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path={MainRoutes.Root} element={<Navigate to={FoodRoutes.Search}/>}>
          
        </Route>
        <Route path={FoodRoutes.Search} element={<FoodCreate/>}/>
        <Route path={IngredientsRoutes.Search} element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}