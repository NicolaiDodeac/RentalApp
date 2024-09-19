import Select from "react-select";
import makeData from "../../helpers/makeData.json";
import s from "./InputMake.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMake } from "../../redux/filters/selectors";
import { filterMake } from "../../redux/filters/slice";

const InputMake = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectMake);

  const handleBrandChange = (data) => dispatch(filterMake(data.value));

  return (
    <label className="text-[#8a8a89] text-xs relative ">
      Car brand
      <Select
        name="brand"
        options={makeData}
        unstyled
        className={s.customSelect}
        classNamePrefix="react-select"
        onChange={handleBrandChange}
        placeholder="Brand "
        value={value}
        // defaultValue={optionsBrand[0].value}
        // defaultInputValue={optionsBrand[0].value}
      />
    </label>
  );
};
export default InputMake;
