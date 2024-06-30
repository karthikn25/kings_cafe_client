import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Component/Category/Category';
import CategoryList from './Component/CategoryList/CategoryList';
import Rating from './Component/Rating/Rating';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path='/' element={<Category/>} />

     <Route path='/list' element={<CategoryList/>} />

     <Route exact path='/rating' element={<Rating/>} />


     </Routes>
    </div>
  );
}

export default App;
