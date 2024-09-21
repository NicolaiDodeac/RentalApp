import Select from "react-select";
import makeData from "../../helpers/makeData.json";
import s from "./InputMake.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMake } from "../../redux/filters/selectors";
import { filterMake } from "../../redux/filters/slice";

const InputMake = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectMake);

  const handleBrandChange = (data) =>
    dispatch(filterMake(data ? data.value : null));

  return (
    <label className={s.label}>
      Car brand
      <Select
        name="brand"
        options={makeData}
        unstyled
        className={s.customSelect}
        classNamePrefix="react-select"
        onChange={handleBrandChange}
        placeholder="Enter the text"
        value={value ? makeData.find((option) => option.value === value) : null}
        isClearable={true}
      />
    </label>
  );
};

export default InputMake;
