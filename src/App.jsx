import Header from "./components/Header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import CardDetailComic from "./components/Cards/CardDetailComic";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/comics" element={<Cards></Cards>} />
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
