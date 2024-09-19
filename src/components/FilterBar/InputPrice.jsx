import Select from "react-select";
import priceData from "../../helpers/priceData.json";
import s from "./InputMake.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPrice } from "../../redux/filters/selectors";
import { filterPrice } from "../../redux/filters/slice";

const InputPrice = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectPrice);

  const handlePriceChange = (data) => dispatch(filterPrice(data.value));

  return (
    <label className="text-[#8a8a89] text-xs relative ">
      Price/ 1 hour
      <Select
        name="price"
        options={priceData}
        unstyled
        className={s.customSelect}
        classNamePrefix="react-select"
        onChange={handlePriceChange}
        placeholder="Price"
        value={value}
        // defaultInputValue={optionsPrice[0].value}
      />
    </label>
  );
};

export default InputPrice;
// TODO fix values
