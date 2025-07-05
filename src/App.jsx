import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, ElectronicProducts, Home, JeweleryProducts, MensProducts, NotImplemented, ProductDetail, WomensProducts, About, Contact } from "./pages";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men-clothing" element={<MensProducts />} />
        <Route path="/women-clothing" element={<WomensProducts />} />
        <Route path="/jewelery" element={<JeweleryProducts />} />
        <Route path="/electronics" element={<ElectronicProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetail/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotImplemented />} />
      </Routes>
    </Router>
  )
}

export default App
