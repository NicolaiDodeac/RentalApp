import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../components/CatalogList/CatalogList";
import { selectCars, selectHasMore } from "../redux/carCatalog/selectors";
import FilterPanel from "../components/FilterBar/FilterPanel";
import { selectFilteredCatalog } from "../redux/filters/selectors";
import { useState } from "react";
import { fetchMoreCarsThunk } from "../redux/carCatalog/operations";
import s from "../components/CatalogList/CatalogList.module.css";

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const filteredCatalog = useSelector(selectFilteredCatalog);
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const hasMore = useSelector(selectHasMore);

  return (
    <div className={s.catalogWrapper}>
      <div className={s.listWrap}>
        <h1>Car Catalog</h1>
        <FilterPanel />
        {filteredCatalog.length ? (
          <CatalogList cars={filteredCatalog} />
        ) : (
          <CatalogList cars={cars} />
        )}
      </div>
      {hasMore && !filteredCatalog.length && (
        <button
          onClick={() => {
            dispatch(fetchMoreCarsThunk(page));
            setPage((prev) => prev + 1);
          }}
          className={s.loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CarCatalog;
