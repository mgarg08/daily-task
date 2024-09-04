import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import "./style.css";
import IndividualProduct from "./components/IndividualProduct";


function ProductDetail() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/product/:id"
            element={<IndividualProduct />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default ProductDetail;
