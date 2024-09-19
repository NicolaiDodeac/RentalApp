import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { useDispatch } from "react-redux";
import { fetchCarsThunk } from "../redux/carCatalog/operations";

const Layout = () => {
  const dispatch = useDispatch();
  dispatch(fetchCarsThunk());
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
