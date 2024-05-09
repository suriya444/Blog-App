import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import UserBlog from './pages/UserBlog';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-blogs' element={<UserBlog />} />
        <Route path='/blog-details/:id' element={<BlogDetails />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
