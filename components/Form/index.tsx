import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";

import { Vac } from "../../pages";

import Chevron from "./images/chevron.svg";
import Cross from "./images/cross.svg";

import styles from "./Form.module.css";

type Props = {
  vacancies: Vac[];
  setFilter1: Dispatch<SetStateAction<string>>;
};

export const Form = ({ vacancies, setFilter1}: Props) => {
  const ref1 = useRef<HTMLSelectElement>(null);
  const ref2 = useRef<HTMLSelectElement>(null);
  const [clear,setClear] = useState(true)
  const forms = Array.from(
    new Set(
      vacancies.reduce(
        (acc, vac) => [...acc, vac.vacan.schedule.name],
        [] as string[]
      )
    )
  );

  const changeFilter = () =>{
    if (ref1.current) {
      setFilter1(ref1.current.value) ;
      setClear(false);
    }}

  const clearFilter = () => {
    setFilter1("");
    setClear(true);
    if (ref1.current) {
      ref1.current.value = "";
    }
    if (ref2.current) {
      ref2.current.value = "";
    }
  };

  return (
    <form noValidate className={styles.form}>
      <div className={styles.firstCol}>
        <div className={styles.item}>
          <label htmlFor="select">Form</label>
          <select
            ref={ref1}
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
          <label htmlFor="select">Position</label>
          <select
          ref={ref2}
          required
            defaultValue=""
            id="select"
          >
            <option value="" disabled hidden>
              Not selected
            </option>
            <option value="1" >
              1
            </option>
          </select>
          <Chevron />
        </div>
        <button type="button" className={styles.search} onClick ={changeFilter} >Search</button>
      </div>
      {!clear?
      <button type="button" onClick={clearFilter} className={styles.btn} >
      <Cross/>
      <div >Clear filters</div>
      </button>:
      <div></div>
      }
    </form>
  );
};
