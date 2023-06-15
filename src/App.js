
import './App.css';


import {
  BrowserRouter,

  Route,

  Routes
} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Location from './pages/Location/Location';
import Review from './pages/Review/Review';
import Contact from './pages/Contact/Contact';
import Classify from './pages/Classify/Classify';
import Services from './pages/Home/Services/Services';
import Post from './pages/Post';
import RatingApp from './pages/Home/Rate/RatingApp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="location" element={<Location></Location>}></Route>
        <Route path="reviews" element={<Review></Review>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="classify" element={<Classify></Classify>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
        <Route path="posts" element={<Post></Post>}></Route>
        <Route path="rate" element={<RatingApp></RatingApp>}></Route>

      </Routes>



    </div>
  );
}

export default App;
