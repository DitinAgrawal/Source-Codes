import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Specials from "./pages/Specials/Specials.jsx";
import Events from "./pages/Events/Events.jsx";
import Chefs from "./pages/Chefs/Chefs.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Book_a_table from "./pages/book_a_table/book_a_table.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/specials" element={<Specials/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/chefs" element={<Chefs/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/book_a_table" element={<Book_a_table/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;