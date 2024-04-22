import Image from "next/image";

import styles from "../../styles/Home.module.css";
import { Vac } from "../../pages";
import { useState } from "react";
import Chevron2 from "../Form/images/chronb.svg"
import { Transform } from "stream";

type Props = {
  vac: Vac;
};

export const Item = ({ vac }: Props) => {
  const [fold, setFold] = useState(true);
  const toggleFold = () => setFold(!fold);
  var logoUrl="/src/kit.png";
  if (vac.employer.logo_urls){
    logoUrl=vac.employer.logo_urls.original
  }
  return (
    <li key={vac.id} className={styles.item}>
      <div className={styles.firstColumn}>
      <div  className={styles.log}><div><h2>{vac.name}</h2>
        {logoUrl && (
          <Image
            width="160"
            height="40"
            src={logoUrl}
            alt="Лого"
            className={styles.image}
          ></Image>
        )}</div>
        <button type="button" className={styles.respButton}>Respond</button>
        </div>
      
        <div >
          <p><span style={{ color: "#959DA3" }}>Form</span> {vac.vacan.schedule.name}</p>
          <p><span style={{ color: "#959DA3" }}>Company</span> {vac.employer.name}</p>
          <p>
          <span style={{ color: "#959DA3" }}>Web</span>{" "}
            <a target="_blank" href={vac.empl.site_url} rel="noreferrer">
              {vac.empl.site_url}
            </a>
          </p>
          <p><span style={{ color: "#959DA3" }}>Adress</span> {vac.area.name}</p>
        </div>
      </div>
      <div
        className={`${styles.secondColumn} ${
          fold ? styles.maxHeight : styles.expanded
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: vac.vacan.description }} />
      </div>
      <button className={styles.btn} onClick={toggleFold}>
        {fold ? "More details" : "Less details"}
        {fold ? <Chevron2 /> : <div style={{transform:"rotate(180deg)"}}><Chevron2 /></div>}
      </button>
    </li>
  );
};
