import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-5 py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
