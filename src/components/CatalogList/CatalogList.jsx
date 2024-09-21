import s from "./CatalogList.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogList = ({ cars }) => {
  return (
    <div>
      <div className={s.grid}>
        {cars.length > 0 ? (
          cars.map((car) => <CatalogCard key={car.id} car={car} />)
        ) : (
          <p>No cars available</p>
        )}
      </div>
    </div>
  );
};

export default CatalogList;
