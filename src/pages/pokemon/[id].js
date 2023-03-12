/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useSelector } from 'react-redux';
import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoaderComponent } from '@/components/loader';
import { CardComponent } from '@/components/card';

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;
  const pokemon = useSelector((state) => state.pokemon);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(undefined);

  async function fetchDataById(id) {
    setFetching(true);
    setError(false);
    try {
      const res = await fetch(`/api/getPokemonByIdApi?id=${id}`);
      const data = await res.json();
      setData(data);
      fetchLocationData(id);
    } catch (error) {
      setError(true);
      setFetching(false);
    }
  }

  async function fetchLocationData(id) {
    try {
      const res = await fetch(`/api/getPokemonLocationIdApi?id=${id}`);
      const locations = await res.json();
      setLocation(locations);
    } catch (error) {
      setError(error);
    }
    setFetching(false);
  }

  useEffect(() => {
    if (pokemon.url) {
      fetchDataById(id);
    } else {
      setData(pokemon);
    }
  }, [pokemon, id]);

  return (
    <Layout>
      {fetching ? (
        <LoaderComponent />
      ) : (
        <CardComponent data={data} id={id} location={location} />
      )}
    </Layout>
  );
}
