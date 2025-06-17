import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import President from "./pages/President";
import VicePresident from "./pages/VicePresident";
import Conselho from "./pages/Conselho";
import Pastores from "./pages/Pastores";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lideranca/presidente" element={<President />} />
        <Route path="/lideranca/vice-presidente" element={<VicePresident />}/>
        <Route path="/lideranca/conselho" element={<Conselho />} />
        <Route path="/lideranca/pastores" element={<Pastores />} />
        {/* outras rotas podem vir aqui depois */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
