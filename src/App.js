import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewCategory from "./components/Categories/AddNewCategory";

import Navbar from "./pages/navigation/publicNavbar/Navbar";
import Login from "./components/Users/Login/Login";
import Profile from "./components/Users/Profile/Profile";
import Register from "./components/Users/Register/Register";
import CategoryList from "./components/Categories/CategoryList";
import CreatePost from "./components/Posts/CreatePost/CreatePost";
import PostsList from "./components/Posts/CreatePost/PostsList";
import PostDetails from "./components/Posts/CreatePost/PostDetails";
import Home from "./components/home/Home";
import UpdatePost from "./components/Posts/CreatePost/UpdatePost";
import UsersList from "./components/Users/usersList/UsersList";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/add-category" element={<AddNewCategory />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/update-post/:id" element={<UpdatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
