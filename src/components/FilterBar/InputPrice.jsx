import Select from "react-select";
import priceData from "../../helpers/priceData.json";
import s from "./InputPrice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPrice } from "../../redux/filters/selectors";
import { filterPrice } from "../../redux/filters/slice";

const InputPrice = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectPrice);

  const handlePriceChange = (data) =>
    dispatch(filterPrice(data ? data.value : null));

  return (
    <label className={s.label}>
      Price / 1 hour
      <Select
        name="price"
        options={priceData}
        unstyled
        className={s.priceSelect}
        classNamePrefix="react-select"
        onChange={handlePriceChange}
        placeholder="Price"
        value={
          value ? priceData.find((option) => option.value === value) : null
        }
        isClearable={true}
      />
    </label>
  );
};

export default InputPrice;
