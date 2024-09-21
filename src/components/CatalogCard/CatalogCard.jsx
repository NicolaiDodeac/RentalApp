import { FaHeart, FaRegHeart } from "react-icons/fa";
import s from "./CatalogCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { addFavorites, deleteFavorites } from "../../redux/favorites/slice";
import { addCurrent } from "../../redux/carCatalog/slice";

const CatalogCard = ({ car }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavorites).find(
    (item) => item.id === car.id
  );

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(car));
    } else {
      dispatch(addFavorites(car));
    }
  };

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <div className={s.heart}>
          {isFavorite ? (
            <FaHeart color="#3470FF" onClick={handleFavoriteToggle} />
          ) : (
            <FaRegHeart onClick={handleFavoriteToggle} />
          )}
        </div>
        <img
          src={car.img}
          alt={`${car.make} ${car.model}`}
          className={s.image}
        />
      </div>

      <div className={s.titleWrapper}>
        <h2 className={s.title}>
          {car.make} <span className={s.model}>{car.model},</span> {car.year}
        </h2>
        <p className={s.price}>{car.rentalPrice}</p>
      </div>

      <div className={s.details}>
        <p> {car.address.split(",").slice(1).join(" | ")}</p> |
        <p>{car.rentalCompany}</p> | <p>{car.type}</p> | <p>{car.make}</p> |{" "}
        <p>{car.model}</p> | <p>{car.id}</p> |<p>{car.accessories[0]}</p>
      </div>
      {/* <div className={s.footer}> */}
      <button onClick={() => dispatch(addCurrent(car))} className={s.learnMore}>
        Learn more
      </button>
    </div>
    // </div>
  );
};

export default CatalogCard;
