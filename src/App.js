import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductsPage from "./page/ProductsPage";
import ProductPage from "./page/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Je fais un lien entre App et les différentes page créées 
        - En l'occurence un lien avec la page "Home" qui devient accessible si un utilisateur clique sur la nav "Home" du "header". 
        - idem en cliquant sur "Products" de la nav contenu dans le "header", l'utilisateur attérrit sur la page ProductsPage.
        - La troisème route créée permet à l'utilisateur d'accéder aux détails des produits listés qui apparaissent 
        alors sur la page nommée "ProductsPage".   ":id" est une variable qui prendra la valeur de l'id du produit choisi       
        */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;