import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import axios from "axios";

import { Item } from "../components/Item";
import { Form } from "../components/Form";

import styles from "../styles/Home.module.css";

export type Vac = {
  id: string;
  premium: boolean;
  has_test: boolean;
  response_url: string | null;
  address: string | null;
  alternate_url: string;
  apply_alternate_url: string;
  department: {
    id: string;
    name: string;
  };
  salary: {
    to: number | null;
    from: number | null;
    currency: string;
    gross: boolean;
  };
  name: string;
  area: {
    name: string;
  };
  url: string;
  employer: {
    id: string;
    alternate_url: string;
    logo_urls?: {
      original: string;
    };
    name: string;
  };
  working_days: [
    {
      id: string;
    }
  ];
  vacan: { schedule: { name: string }; description: string };
  empl: { site_url: string };
};

export const getStaticProps: GetStaticProps<{
  vacancies: Vac[];
}> = async () => {
  let vacancies = (
    await axios.get<{ items: Vac[] }>(
      "https://api.hh.ru/vacancies?specialization=1.221&per_page=5"
    )
  ).data.items;

  vacancies = await Promise.all(
    vacancies.map(async (vac) => {
      const vacan = (await axios.get(`https://api.hh.ru/vacancies/${vac.id}`))
        .data;
      const empl = (
        await axios.get(`https://api.hh.ru/employers/${vac.employer.id}`)
      ).data;
      return { ...vac, vacan, empl };
    })
  );

  return {
    props: {
      vacancies,
    },
  };
};

export default function Home({
  vacancies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [formFilter, setFormFilter] = useState("");

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>List of vacancies</h1>
      <Form vacancies={vacancies} setFilter={setFormFilter} />
      <ul className={styles.list}>
        {vacancies
          .filter((vac) =>
            formFilter ? vac.vacan.schedule.name === formFilter : true
          )
          .map((vac) => (
            <Item vac={vac} key={vac.id} />
          ))}
      </ul>
    </section>
  );
}
