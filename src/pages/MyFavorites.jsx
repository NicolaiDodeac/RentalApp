import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/favorites/selectors";
import CatalogList from "../components/CatalogList/CatalogList";

const MyFavorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      <CatalogList cars={favorites} />
    </div>
  );
};

export default MyFavorites;
