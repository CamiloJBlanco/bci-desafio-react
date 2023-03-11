import React, { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import { FooterComponent } from '@/components/footer';
import { HeadComponent } from '@/components/head';
import { HomeComponent } from '@/components/Home';
import { ToggleComponent } from '@/components/toggle';

export default function Home() {
  const [name, setName] = useState(undefined);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  async function fetchDefaultData() {
    setFetching(true);
    const res = await fetch(`/api/getDefaultPokemonList`);
    const data = await res.json();
    const results = data.results;
    setData(results);
    setFetching(false);
  }

  async function fetchDataByName(name) {
    setFetching(true);
    const res = await fetch(`/api/getPokemonByNameApi?name=${name}`);
    const data = await res.json();
    setData(data);
    setFetching(false);
  }

  useEffect(() => {
    !name ? fetchDefaultData() : fetchDataByName(name);
  }, [name]);

  return (
    <>
      <HeadComponent />
      <ToggleComponent />
      <div className={styles.main}>
        <HomeComponent data={data} fetching={fetching} />
      </div>
      <FooterComponent />
    </>
  );
}
