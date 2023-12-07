import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Link, Navigate, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import CardDetailComic from "./components/Cards/CardDetailComic";
import Welcome from "./components/Backgrounds/Welcome";
import AboutUs from "./components/Backgrounds/AboutUs";
import ContactUs from "./components/Backgrounds/ContactUs";

function App() {
  // const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  // const [login, setLogin] = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || contrasena === "") {
      localStorage.setItem("login", true);
      navigate("/comics");
    } else {
      setError("Campos obligatorios");
      // localStorage.setItem("user", user);
    }
  };

  const handleLogOut = () => {
    setError(null);
    localStorage.removeItem("login");
    Navigate("/");
  };

  return (
    <>
      <Header handleLogOut={handleLogOut} />
      <Routes>
        <Route path="/" element={<Welcome></Welcome>} />
        <Route path="/comics" element={<Cards></Cards>} />
        <Route
          path="/login"
          element={
            <Login
              error={error}
              nombre={nombre}
              setNombre={setNombre}
              contrasena={contrasena}
              setContrasena={setContrasena}
              handleSubmit={handleSubmit}
            ></Login>
          }
        />
        <Route path="/aboutUs" element={<AboutUs></AboutUs>} />
        <Route path="/contactUs" element={<ContactUs></ContactUs>} />
        <Route
          path="/comics/:id"
          element={<CardDetailComic></CardDetailComic>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
