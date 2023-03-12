import React, { useEffect, useState } from 'react';
import { HomeComponent } from '@/components/Home';
import Layout from '@/components/layout';

export default function Home() {
  const [name, setName] = useState(undefined);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
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
    setError(false);
    try {
      const res = await fetch(`/api/getPokemonByNameApi?name=${name}`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(true);
    }
    setFetching(false);
  }
  useEffect(() => {
    !name ? fetchDefaultData() : fetchDataByName(name);
  }, [name]);

  return (
    <Layout>
      <HomeComponent
        data={data}
        fetching={fetching}
        setName={setName}
        error={error}
      />
    </Layout>
  );
}
