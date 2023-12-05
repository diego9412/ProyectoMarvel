import Header from "./components/Header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/movies" element={<Cards></Cards>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
