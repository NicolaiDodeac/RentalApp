import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { HiOutlineRefresh } from "react-icons/hi";
import {
  addFilteredCars,
  filterMileageFrom,
  filterMileageTo,
  resetFilter,
} from "../../redux/filters/slice";
import s from "./FilterPanel.module.css";
import InputMake from "./InputMake";
import InputPrice from "./InputPrice";
import { selectCars } from "../../redux/carCatalog/selectors";
import {
  selectFilter,
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/selectors";
import { setHasMore } from "../../redux/carCatalog/slice";

const formatNumber = (num) => {
  const max = 999999;
  if (num > 999999) return max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const unformatNumber = (str) => {
  return str.replace(/,/g, "");
};

const FilterPanel = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const filterCars = (cars, filters) => {
    return cars.filter((car) => {
      const make = filters.make
        ? car.make.toLowerCase() === filters.make.toLowerCase()
        : true;
      const price = filters.price
        ? +car.rentalPrice.replace("$", "") <= filters.price
        : true;
      const mileage =
        (filters.mileage.mileageFrom
          ? filters.mileage.mileageFrom <= car.mileage
          : true) &&
        (filters.mileage.mileageTo
          ? filters.mileage.mileageTo >= car.mileage
          : true);

      return make && price && mileage;
    });
  };

  const handleChange = () => {
    dispatch(addFilteredCars(filterCars(cars, filter)));
  };

  const initialValues = {
    mileageFrom: mileageFrom,
    mileageTo: mileageTo,
  };

  return (
    <div className={s.panelWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleChange}
        // enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={s.form}>
            <span
            //   className="w-[224px]"
            >
              <InputMake />
            </span>
            <span
            //   className="w-[124px]"
            >
              <InputPrice />
            </span>
            <span
            //   className="flex "
            >
              <label
              //   className="text-[#8a8a89] text-xs relative leading-[22px] flex flex-col"
              >
                Сar mileage / km
                <Field
                  name="mileageFrom"
                  //   className="pl-20 bg-[#f7f7fb] border-r-2 border-t-0 border-l-0 border-b-0 text-lg rounded-l-[14px] outline-none w-40 h-12  text-black border-[2px] border-gray-200"
                  type="text"
                  value={formatNumber(values.mileageFrom)}
                  onChange={(e) => {
                    const value = unformatNumber(e.target.value);
                    if (!isNaN(value)) {
                      setFieldValue("mileageFrom", Number(value));
                      if (Number(value) >= values.mileageTo) {
                        setFieldValue("mileageTo", Number(value) + 500);
                        dispatch(filterMileageTo(Number(value) + 500));
                      }
                      dispatch(filterMileageFrom(Number(value)));
                    }
                  }}
                />
                <p
                //   className="absolute text-xl text-black top-8 left-5"
                >
                  From
                </p>
              </label>
              <label
              //   className="text-transparent text-xs relative leading-[22px] flex flex-col"
              >
                Сar mileage / km
                <Field
                  name="mileageTo"
                  //   className="pl-14 bg-[#f7f7fb] text-lg text-black border-none  w-40 h-12 rounded-r-[14px] outline-none"
                  type="text"
                  value={formatNumber(values.mileageTo)}
                  onChange={(e) => {
                    const value = unformatNumber(e.target.value);
                    if (!isNaN(value)) {
                      setFieldValue("mileageTo", Number(value));
                      dispatch(filterMileageTo(Number(value)));
                    }
                  }}
                />
                <p
                //   className="absolute text-xl text-black top-8 left-7"
                >
                  To
                </p>
              </label>
            </span>
            <button
              //   className="bg-[#3470ff] rounded-xl p-[14px] w-[136px] h-12 text-center text-white font-semibold text-sm hover:bg-[#0b44cd] ease-linear duration-200 outline-none"
              type="submit"
            >
              Search
            </button>
            <HiOutlineRefresh
              //   className="bg-[#3470ff] rounded-full p-[14px] w-12 h-12 text-center text-white font-semibold text-sm hover:bg-[#0b44cd] ease-linear duration-200 cursor-pointer"
              onClick={() => {
                dispatch(setHasMore(true));
                dispatch(resetFilter());
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterPanel;
