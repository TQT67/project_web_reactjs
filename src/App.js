import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import {
  CartPage,
  CategoryProductPage,
  HomePage,
  ProductSinglePage,
  SearchPage,
} from "./pages/index.jsx";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            {/* home page route */}
            <Route path="/" element={<HomePage />} />
            {/* single product route */}
            <Route path="/product/:id" element={<ProductSinglePage />} />
            {/* category wise product listing route */}
            <Route path="/category/:category" element={<CategoryProductPage />} />
            {/* cart */}
            <Route path="/cart" element={<CartPage />} />
            {/* searched products */}
            <Route path="/search/:searchTerm" element={<SearchPage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
