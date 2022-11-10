import { Route, Routes } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers/Headers";
import Cart from "./page/Cart/Cart";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
