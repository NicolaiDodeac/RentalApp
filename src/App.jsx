import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarCatalog from "./pages/CarCatalog";
import MyFavorites from "./pages/MyFavorites";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CarCatalog />} />
        <Route path="favorites" element={<MyFavorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
