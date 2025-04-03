import "./App.css";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Reservation from "./pages/Reservation/Reservation";
import DetailBlog from "./pages/DetailBlog/DetailBlog";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/cartContext";
import Header from "components/Header";
function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detailBlog" element={<DetailBlog />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
