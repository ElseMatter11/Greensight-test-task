import Image from "next/image";

import styles from "../../styles/Home.module.css";
import { Vac } from "../../pages";
import { useState } from "react";

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
        {logoUrl && (
          <Image
            width="373"
            height="95"
            src={logoUrl}
            alt="Лого"
            className={styles.image}
          ></Image>
        )}
        <div style={{ marginTop: 57 }}>
          <p>Form: {vac.vacan.schedule.name}</p>
          <p>Company: {vac.employer.name}</p>
          <p>
            Web:{" "}
            <a target="_blank" href={vac.empl.site_url} rel="noreferrer">
              {vac.empl.site_url}
            </a>
          </p>
          <p>Address: {vac.area.name}</p>
        </div>
      </div>
      <div
        className={`${styles.secondColumn} ${
          fold ? styles.maxHeight : styles.expanded
        }`}
      >
        <h2>{vac.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: vac.vacan.description }} />
      </div>
      <button className={styles.btn} onClick={toggleFold}>
        {fold ? "more details" : "close"}
      </button>
    </li>
  );
};
