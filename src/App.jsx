import Header from "./components/Header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import CardDetailComic from "./components/Cards/CardDetailComic";
import Welcome from "./components/Backgrounds/Welcome";
import AboutUs from "./components/Backgrounds/AboutUs";
import ContactUs from "./components/Backgrounds/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome></Welcome>} />
        <Route path="/comics" element={<Cards></Cards>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/aboutUs" element={<AboutUs></AboutUs>} />
        <Route path="/contactUs" element={<ContactUs></ContactUs>} />
        <Route path="/login" element={<Login></Login>} />
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
