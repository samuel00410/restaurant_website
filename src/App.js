import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Dishes from "./pages/Dishes/Dishes";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Review from "./pages/Review";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="#dishes" element={<Dishes />} />
          <Route path="#about" element={<About />} />
          <Route path="#menu" element={<Menu />} />
          <Route path="#review" element={<Review />} />
          <Route path="#order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
