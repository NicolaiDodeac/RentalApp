import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrent } from "../../redux/carCatalog/slice"; // <-- Correction: Removed 'openModal'
import { useMedia } from "../../helpers/useMedia";
import s from "./CarDetailsModal.module.css";
import { ImCross } from "react-icons/im";
import {
  selectCurrentCard,
  selectIsModalOpen,
} from "../../redux/carCatalog/selectors"; // <-- Correction: Added 'selectIsModalOpen'

Modal.setAppElement("#root");

const CarDetailsModal = () => {
  const dispatch = useDispatch();
  const { isMobile } = useMedia();
  const car = useSelector(selectCurrentCard);
  const isModalOpen = useSelector(selectIsModalOpen); // <-- Correction: Get 'isModalOpen' from Redux

  return (
    <Modal
      isOpen={isModalOpen} // <-- Correction: Use boolean value
      onRequestClose={() => dispatch(deleteCurrent())}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalWrapper}>
        <div className={s.modalEllipse}></div>
        {!isMobile && (
          <button
            className={s.btnCloseModal}
            onClick={() => {
              dispatch(deleteCurrent());
            }}
          >
            <ImCross />
          </button>
        )}

        <div className={s.modalContent}>
          <h2>
            {car.make} {car.model} ({car.year})
          </h2>
          <img
            className={s.img}
            src={car.img}
            alt={`${car.make} ${car.model}`}
          />
          <p>{car.description}</p>
          <p>Mileage: {car.mileage.toLocaleString()} km</p>
          <p>Rental Price: ${car.rentalPrice}/hr</p>
          <p>Fuel Consumption: {car.fuelConsumption} L/100km</p>
          <p>Engine Size: {car.engineSize} L</p>
          <p>Accessories: {car.accessories.join(", ")}</p>
          <p>Functionalities: {car.functionalities.join(", ")}</p>
          <p>Rental Company: {car.rentalCompany}</p>
          <p>Address: {car.address}</p>
          <p>Rental Conditions: {car.rentalConditions}</p>
          <a href="tel:+380730000000" className={s.rentalButton}>
            Rental Car
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailsModal;

// import Modal from "react-modal";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCurrent } from "../../redux/carCatalog/slice";
// import { useMedia } from "../../helpers/useMedia";
// import s from "./CarDetailsModal.module.css";
// import { ImCross } from "react-icons/im";
// import { selectCurrentCard } from "../../redux/carCatalog/selectors";

// Modal.setAppElement("#root");

// const CarDetailsModal = () => {
//   const dispatch = useDispatch();
//   const { isMobile } = useMedia();
//   const car = useSelector(selectCurrentCard);

//   return (
//     <Modal
//       isOpen={!!car}
//       onRequestClose={() => dispatch(deleteCurrent())}
//       className={s.modal}
//       overlayClassName={s.overlay}
//     >
//       <div className={s.modalWrapper}>
//         <div className={s.modalEllipse}></div>
//         {!isMobile && (
//           <button
//             className={s.btnCloseModal}
//             onClick={() => {
//               dispatch(deleteCurrent());
//             }}
//           >
//             <ImCross />
//           </button>
//         )}

//         <div className={s.modalContent}>
//           <div>
//             <div className={s.modalContent}>
//               <h2>
//                 {car.make} {car.model} ({car.year})
//               </h2>
//               <img
//                 className={s.img}
//                 src={car.img}
//                 alt={`${car.make} ${car.model}`}
//               />
//               <p>{car.description}</p>
//               <p>Mileage: {car.mileage.toLocaleString()} km</p>
//               <p>Rental Price: ${car.rentalPrice}/hr</p>
//               <p>Fuel Consumption: {car.fuelConsumption} L/100km</p>
//               <p>Engine Size: {car.engineSize} L</p>
//               <p>Accessories: {car.accessories.join(", ")}</p>
//               <p>Functionalities: {car.functionalities.join(", ")}</p>
//               <p>Rental Company: {car.rentalCompany}</p>
//               <p>Address: {car.address}</p>
//               <p>Rental Conditions: {car.rentalConditions}</p>
//               <a href="tel:+380730000000" className={s.rentalButton}>
//                 Rental Car
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default CarDetailsModal;
