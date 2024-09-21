import Home from "../components/Home/Home";
import { useSelector } from "react-redux";
import { selectFeaturedCars } from "../redux/carCatalog/selectors";

const HomePage = () => {
  const featuredCars = useSelector(selectFeaturedCars); // Fetch featured cars

  return (
    <div>
      <Home cars={featuredCars} /> {/* Pass featured cars as props */}
    </div>
  );
};

export default HomePage;
