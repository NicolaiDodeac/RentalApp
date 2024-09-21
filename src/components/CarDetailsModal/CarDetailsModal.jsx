import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrent } from "../../redux/carCatalog/slice";
import s from "./CarDetailsModal.module.css";
import {
  selectCurrentCard,
  selectIsModalOpen,
} from "../../redux/carCatalog/selectors";
import { MdClose } from "react-icons/md";

Modal.setAppElement("#root");

const CarDetailsModal = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCurrentCard);
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => dispatch(deleteCurrent())}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalWrapper}>
        <button
          className={s.btnCloseModal}
          onClick={() => {
            dispatch(deleteCurrent());
          }}
        >
          <MdClose />
        </button>

        <img className={s.img} src={car.img} alt={`${car.make} ${car.model}`} />

        <div className={s.carDetails}>
          <div className={s.box1}>
            <span className={s.carTitle}>
              <h3>{car.make} </h3>
              <h3 className={s.carModel}>{car.model}, </h3>
              <h3>{car.year}</h3>
            </span>
            <p className={s.carInfo}>
              {car.address.split(", ")[1]} | {car.address.split(", ")[2]} | id:{" "}
              {car.id} | Year: {car.year} | Type: {car.type} | Fuel Consumption:{" "}
              {car.fuelConsumption} L/100km | Engine Size: {car.engineSize}
            </p>
            <p className={s.description}>{car.description}</p>
          </div>

          <div className={s.box2}>
            <p className={s.sectionTitle}>Accessories and functionalities:</p>
            <p className={s.accessories}>
              {[...car.accessories, ...car.functionalities]
                .slice(0, 5)
                .join(" | ")}
            </p>
          </div>

          <div className={s.box3}>
            <p className={s.sectionTitle}>Rental Conditions:</p>
            <ul className={s.conditions}>
              <li className={s.condition}>
                {car.rentalConditions.split("\n")[0].split(":")[0].trim()}:
                <span className={s.highlight}>
                  {car.rentalConditions.split("\n")[0].split(":")[1].trim()}
                </span>
              </li>
              <li className={s.condition}>
                {car.rentalConditions.split("\n")[1]}
              </li>
              <li className={s.condition}>
                {car.rentalConditions.split("\n")[2]}
              </li>
              <li className={s.condition}>
                Mileage:{" "}
                <span className={s.highlight}>
                  {car.mileage.toLocaleString()} km
                </span>
              </li>
              <li className={s.condition}>
                Price:{" "}
                <span className={s.highlight}>
                  {car.rentalPrice.slice(1)} $
                </span>
              </li>
            </ul>
          </div>

          <a href="tel:+380730000000" className={s.rentalButton}>
            Rental car
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailsModal;
