import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ListCard from './pages/ListCard';
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/blogcreate'} element={<AddBlog/>}/>
      <Route path={'/bloglist'} element={<ListCard/>}/>
      <Route path={'/blogdetails/:id'} element={<BlogDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
