import s from "./CatalogList.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";
import { useSelector } from "react-redux";
import { selectCurrentCard } from "../../redux/carCatalog/selectors";
import CarDetailsModal from "../CarDetailsModal/CarDetailsModal";

const CatalogList = ({ cars }) => {
  const isCurrentCard = useSelector(selectCurrentCard);
  return (
    <div>
      {!!isCurrentCard && <CarDetailsModal car={isCurrentCard} />}
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
