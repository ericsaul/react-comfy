import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Products,
  Error,
  SingleProduct,
  Cart,
  Checkout,
  PrivateRoute,
} from "./pages/index";
import { Navbar, Footer, Sidebar } from "./components/index";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
