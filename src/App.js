import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Component/Category/Category';
import CategoryList from './Component/CategoryList/CategoryList';
import Rating from './Component/Rating/Rating';
import Search from './Component/Search/Search';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path='/' element={<Category/>} />

     <Route path='/list/:id/:name' element={<CategoryList/>} />

     <Route path='/rating' element={<Rating/>} />

     <Route path='/search/:keyword' element={<Search/>}/>

     </Routes>
    </div>
  );
}

export default App;
