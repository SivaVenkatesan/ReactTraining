
import './App.css'
import Header from './components/header';
import Footer from './components/footer'; 
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Blog from './pages/Blogs';
import Teams from './pages/Teams';
import PageNotFound from './pages/PageNotFound';
import Training from './components/Training';
import { Outlet } from 'react-router-dom';


function App() {

 const userDetails = {
  isLoggedIn: true,
  firstName: "Steffy",
  lastName: "John",
  photoUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 40,
  socialMedia: [
    {
      id: "123",
      name: "Facebook",
      url: "https:facebook.com",
      target: "blank",
    },
    {
      id: "456",
      name: "LinkedIn",
      url: "https:linkedin.com",
      target: "blank",
    },
    {
      id: "789",
      name: "Instagram",
      url: "https:instagram.com",
      target: "self",
    },
  ],
};



  return (
     <>
      <Header userDetails={userDetails} />
      <Outlet/>
      <div className='container py-7'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/training' element={<Training/>} />
      </Routes>
      </div>
      <Outlet/>
      <Footer userDetails={userDetails} />
      </> 
  )
}

export default App;
