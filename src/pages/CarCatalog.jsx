import { useSelector } from "react-redux";
import CatalogList from "../components/CatalogList/CatalogList";
import { selectCars } from "../redux/carCatalog/selectors";
import FilterPanel from "../components/FilterBar/FilterPanel";
import { selectFilteredCatalog } from "../redux/filters/selectors";
const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const filteredCatalog = useSelector(selectFilteredCatalog);

  return (
    <div>
      <h1>Car Catalog</h1>
      <FilterPanel />
      {filteredCatalog.length ? (
        <CatalogList cars={filteredCatalog} />
      ) : (
        <CatalogList cars={cars} />
      )}
      {/* {loading && <p>Loading...</p>} */}
    </div>
  );
};

export default CarCatalog;
