import { Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Checkout from "./views/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
