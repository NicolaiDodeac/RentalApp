import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../redux/carCatalog/operations";
import { selectCurrentCard } from "../redux/carCatalog/selectors";
import CarDetailsModal from "../components/CarDetailsModal/CarDetailsModal";
const Layout = () => {
  const dispatch = useDispatch();
  dispatch(fetchCarsThunk());
  const isCurrentCard = useSelector(selectCurrentCard);

  return (
    <div>
      {!!isCurrentCard && <CarDetailsModal car={isCurrentCard} />}
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
