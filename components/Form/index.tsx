import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

import { Vac } from "../../pages";

import Chevron from "./images/chevron.svg";
import Cross from "./images/cross.svg";

import styles from "./Form.module.css";

type Props = {
  vacancies: Vac[];
  setFilter: Dispatch<SetStateAction<string>>;
};

export const Form = ({ vacancies, setFilter }: Props) => {
  const ref = useRef<HTMLSelectElement>(null);
  const forms = Array.from(
    new Set(
      vacancies.reduce(
        (acc, vac) => [...acc, vac.vacan.schedule.name],
        [] as string[]
      )
    )
  );

  const changeFilter = (e: ChangeEvent<HTMLSelectElement>) =>
    setFilter(e.target.value);

  const clearFilter = () => {
    setFilter("");
    if (ref.current) {
      ref.current.value = "";
    }
  };

  return (
    <form noValidate className={styles.form}>
      <div className={styles.firstCol}>
        <div className={styles.item}>
          <label htmlFor="select">Form</label>
          <select
            ref={ref}
            onChange={changeFilter}
            required
            defaultValue=""
            id="select"
          >
            <option value="" disabled hidden>
              Not selected
            </option>
            {forms.map((form, index) => (
              <option key={index} value={form}>
                {form}
              </option>
            ))}
          </select>
          <Chevron />
        </div>
        <div className={styles.item}>
          <label>Position</label>
          <input placeholder="Unspecified"></input>
        </div>
      </div>
      <button type="button" onClick={clearFilter} className={styles.btn}>
        Clear sorting
        <Cross />
      </button>
    </form>
  );
};
