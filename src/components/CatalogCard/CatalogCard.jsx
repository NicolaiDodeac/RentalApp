import { FaHeart, FaRegHeart } from "react-icons/fa";
import s from "./CatalogCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { addFavorites, deleteFavorites } from "../../redux/favorites/slice";
const CatalogCard = ({ car }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavorites).find(
    (item) => item.id === car.id
  );
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <div>
          {isFavorite ? (
            <FaHeart
              color="#3470FF"
              onClick={() => dispatch(deleteFavorites(car))}
            />
          ) : (
            <FaRegHeart onClick={() => dispatch(addFavorites(car))} />
          )}
        </div>
        <img
          src={car.img}
          alt={`${car.make} ${car.model}`}
          className={s.image}
        />
      </div>
      <div className={s.content}>
        <h2 className={s.title}>
          {car.make}{" "}
          <span className={s.model}>
            {car.model}, {car.year}
          </span>
        </h2>
        <div className={s.details}>
          <p>{car.address}</p>
          <p>{car.rentalCompany}</p>
          <p>{car.type}</p>
        </div>
        <div className={s.features}>
          <span>{car.fuelConsumption} L/100km</span>
          <span>{car.engineSize} L</span>
          <span>{car.functionalities[0]}</span>
        </div>
        <div className={s.footer}>
          <p className={s.price}>{car.rentalPrice}/hr</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
