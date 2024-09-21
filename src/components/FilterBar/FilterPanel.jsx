import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { TiRefreshOutline } from "react-icons/ti";
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
  selectMake,
  selectPrice,
} from "../../redux/filters/selectors";
import { setHasMore } from "../../redux/carCatalog/slice";
// import { toast } from "react-toastify";
import * as Yup from "yup";

const formatNumber = (num) => {
  const max = 999000;
  if (num > 999000) return max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const unformatNumber = (numStr) => {
  return numStr.replace(/,/g, "");
};

const FilterPanel = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const make = useSelector(selectMake);
  const price = useSelector(selectPrice);

  const filterCars = (cars) => {
    return cars.filter((car) => {
      const rentalPrice =
        typeof car.rentalPrice === "string"
          ? Number(car.rentalPrice.replace("$", ""))
          : car.rentalPrice || 0;

      const matchMake = make
        ? car.make.toLowerCase() === make.toLowerCase()
        : true;
      const matchPrice = price ? rentalPrice <= price : true;
      const matchMileage =
        (mileageFrom ? mileageFrom <= car.mileage : true) &&
        (mileageTo ? mileageTo >= car.mileage : true);

      return matchMake && matchPrice && matchMileage;
    });
  };

  const handleSubmit = () => {
    try {
      dispatch(addFilteredCars(filterCars(cars, filters)));
      // toast.success("Filters applied!");
    } catch (error) {
      console.error("Failed to apply filters", error);
      // toast.error("Error applying filters!");
    }
  };

  const validationSchema = Yup.object().shape({
    mileageFrom: Yup.number()
      .min(0, "Mileage must be greater than or equal to 0")
      .required("Required"),
    mileageTo: Yup.number()
      .min(Yup.ref("mileageFrom"), "Mileage 'To' must be greater than 'From'")
      .required("Required"),
  });

  const initialValues = {
    mileageFrom: mileageFrom,
    mileageTo: mileageTo,
  };

  return (
    <div className={s.panelWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ values, setFieldValue, errors, touched, resetForm }) => (
          <Form className={s.form}>
            <span className={s.InputMake}>
              <InputMake />
            </span>
            <span className={s.InputPrice}>
              <InputPrice />
            </span>
            <span className={s.mileInput}>
              <label className={s.mileLabel}>
                Car mileage / km
                <Field
                  className={s.distInput}
                  name="mileageFrom"
                  type="text"
                  value={formatNumber(values.mileageFrom)}
                  placeholder="From"
                  // onFocus={(e) => (e.target.placeholder = "")}
                  // onBlur={(e) => (e.target.placeholder = "From")}
                  // onChange={(e) => {
                  //   let value = e.target.value;
                  //   const numericValue = parseInt(value, 10) || 0;
                  //   setFieldValue("mileageFrom", numericValue);
                  //   if (numericValue >= values.mileageTo) {
                  //     setFieldValue("mileageTo", numericValue + 1);
                  //     dispatch(filterMileageTo(numericValue + 1));
                  //   }
                  //   dispatch(filterMileageFrom(numericValue));
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
                <p className={s.mileText}>From</p>
                {errors.mileageFrom && touched.mileageFrom && (
                  <div className={s.error}>{errors.mileageFrom}</div>
                )}
              </label>
              <label className={s.mileLabel}>
                Car mileage / km
                <Field
                  className={s.distRInput}
                  name="mileageTo"
                  // type="number"
                  type="text"
                  value={formatNumber(values.mileageTo)}
                  placeholder="To"
                  // min="0"
                  // value={values.mileageTo}
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "To")}
                  onChange={(e) => {
                    const value = unformatNumber(e.target.value);
                    if (!isNaN(value)) {
                      setFieldValue("mileageTo", Number(value));
                      dispatch(filterMileageTo(Number(value)));
                      // onChange={(e) => {
                      //   let value = e.target.value;

                      //   // Remove leading zero
                      //   if (value.startsWith("0")) {
                      //     value = value.replace(/^0+/, "");
                      //   }

                      //   const numericValue = parseInt(value, 10) || 0;
                      //   setFieldValue("mileageTo", numericValue);
                      //   dispatch(filterMileageTo(numericValue));
                    }
                  }}
                />
                <p className={s.mileText}>To</p>
                {errors.mileageTo && touched.mileageTo && (
                  <div className={s.error}>{errors.mileageTo}</div>
                )}
              </label>
            </span>
            <button type="submit" className={s.searchButton}>
              Search
            </button>
            <TiRefreshOutline
              onClick={() => {
                dispatch(setHasMore(true));
                dispatch(resetFilter());
                resetForm();
              }}
              className={s.refreshButton}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterPanel;
