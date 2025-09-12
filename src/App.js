import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Agriculteur from "./pages/Agriculteur";
import Engagement from "./pages/Engagement";
import Produit from "./pages/Produit";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import ChoixPetit from "./pages/ChoixPetit";
import ChoixGrand from "./pages/ChoixGrand";
import Achat from "./pages/Achat";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/agriculteur" element={<Agriculteur />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/choixpetit" element={<ChoixPetit />} />
          <Route path="/choixgrand" element={<ChoixGrand />} />
          <Route path="/achat" element={<Achat />} />
        </Route>
          <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
