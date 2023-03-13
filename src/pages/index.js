import React, { useEffect, useState } from 'react';
import { HomeComponent } from '@/components/Home';
import Layout from '@/components/layout';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setFetching } from '@/store/store';
import { registerServiceWorker } from '../../serviceWorker';

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const fetching = useSelector((state) => state.fetching);

  const [term, setTerm] = useState(undefined);
  const [error, setError] = useState(false);

  async function fetchDefaultData() {
    dispatch(setFetching(true));
    try {
      const res = await fetch(`/api/getDefaultPokemonList`);
      const data = await res.json();
      const results = data.results;
      dispatch(setData(results));
      localStorage.setItem('pokemonData', JSON.stringify(results)); // save data to local storage
      setError(false);
    } catch (err) {
      setError(err);
    }
    dispatch(setFetching(false));
  }

  async function fetchDataByName(term) {
    dispatch(setFetching(true));
    try {
      const res = await fetch(`/api/getPokemonByTermApi?term=${term}`);
      const data = await res.json();
      dispatch(setData(data));
      localStorage.setItem('pokemonData', JSON.stringify(data)); // save data to local storage
      setError(false);
    } catch (err) {
      setError(err);
    }
    dispatch(setFetching(false));
  }

  useEffect(() => {
    const storedData = localStorage.getItem('pokemonData');
    if (!navigator.onLine && storedData) {
      const parsedData = JSON.parse(storedData);
      const filteredData =
        parsedData.filter(
          ({ name, url }) =>
            name === term ||
            name.includes(term) ||
            url.match(new RegExp(`\\b${term}\\b`))
        ) || parsedData;
      dispatch(setData(filteredData));
    } else {
      !term ? fetchDefaultData() : fetchDataByName(term);
    }
    registerServiceWorker();
  }, [term, registerServiceWorker]);

  return (
    <Layout>
      <HomeComponent
        data={data}
        error={error}
        fetching={fetching}
        setTerm={setTerm}
      />
    </Layout>
  );
}
