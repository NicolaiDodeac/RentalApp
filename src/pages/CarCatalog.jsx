import { useSelector } from "react-redux";
import CatalogList from "../components/CatalogList/CatalogList";
import { selectCars } from "../redux/carCatalog/selectors";
const CarCatalog = () => {
  const cars = useSelector(selectCars);
  return (
    <div>
      <h1>Car Catalog</h1>
      <CatalogList cars={cars} />
      {/* {loading && <p>Loading...</p>} */}
    </div>
  );
};

export default CarCatalog;
