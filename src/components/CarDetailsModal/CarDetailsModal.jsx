import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Icons } from "../Icons/Icons";
import { closeModal } from "../../redux/modal/slice";
import { useMedia } from "../../hooks/useMedia";
import s from "./ModalWrapper.module.css";

Modal.setAppElement("#root");

const ModalWrapper = ({ children, isOpenModal }) => {
  const dispatch = useDispatch();
  const { isMobile } = useMedia();

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => dispatch(closeModal())}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalWrapper}>
        <div className={s.modalEllipse}></div>
        {!isMobile && (
          <button
            className={s.btnCloseModal}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <Icons name={"close"} width={18} height={18} />
          </button>
        )}

        <div className={s.modalContent}>{children}</div>
      </div>
    </Modal>
  );
};

export default ModalWrapper;

// import { useEffect } from "react";
// import styles from "./CarDetailsModal.module.css";
// import { useDispatch } from "react-redux";
// import { deleteCurrent } from "../../redux/carCatalog/slice";

// const CarDetailsModal = ({ car }) => {
//   const dispatch = useDispatch();

//   const onClose = dispatch(deleteCurrent);
//   useEffect(() => {
//     const handleEsc = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   const handleBackdropClick = (event) => {
//     if (event.target.className === styles.backdrop) {
//       console.log("abracadabra");
//       onClose();
//     }
//   };

//   return (
//     <div className={styles.backdrop} onClick={handleBackdropClick}>
//       <div className={styles.modalContent}>
//         <button onClick={onClose} className={styles.closeButton}>
//           ×
//         </button>
//         <h2>
//           {car.make} {car.model} ({car.year})
//         </h2>
//         <img
//           className={styles.img}
//           src={car.img}
//           alt={`${car.make} ${car.model}`}
//         />
//         <p>{car.description}</p>
//         <p>Mileage: {car.mileage.toLocaleString()} km</p>
//         <p>Rental Price: ${car.rentalPrice}/hr</p>
//         <p>Fuel Consumption: {car.fuelConsumption} L/100km</p>
//         <p>Engine Size: {car.engineSize} L</p>
//         <p>Accessories: {car.accessories.join(", ")}</p>
//         <p>Functionalities: {car.functionalities.join(", ")}</p>
//         <p>Rental Company: {car.rentalCompany}</p>
//         <p>Address: {car.address}</p>
//         <p>Rental Conditions: {car.rentalConditions}</p>
//         <a href="tel:+380730000000" className={styles.rentalButton}>
//           Rental Car
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CarDetailsModal;
