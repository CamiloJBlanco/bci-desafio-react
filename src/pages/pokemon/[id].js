/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { LoaderComponent } from '@/components/loader';
import { CardComponent } from '@/components/card';
import { setFetching, setLocation, setPokemonDetails } from '@/store/store';
import { FallBackComponent } from '@/components/fallback';

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const [error, setError] = useState(false);
  const fetching = useSelector((state) => state.fetching);
  const location = useSelector((state) => state.location);
  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  async function fetchDataById(id) {
    dispatch(setFetching(true));
    try {
      const res = await fetch(`/api/getPokemonByIdApi?id=${id}`);
      const data = await res.json();
      dispatch(setPokemonDetails(data));
      fetchLocationData(id);
      // Store data in local storage
      localStorage.setItem('pokemonDetails', JSON.stringify(data));
      localStorage.setItem('id', id);
    } catch (err) {
      setError(err);
    }
    dispatch(setFetching(false));
  }

  async function fetchLocationData(id) {
    try {
      const res = await fetch(`/api/getPokemonLocationIdApi?id=${id}`);
      const locations = await res.json();
      dispatch(setLocation(locations));
      // Store data in local storage
      localStorage.setItem('location', JSON.stringify(locations));
    } catch (err) {
      setError(err);
    }
    dispatch(setFetching(false));
  }

  useEffect(() => {
    if (pokemon.url) {
      fetchDataById(id);
    } else {
      dispatch(setPokemonDetails(pokemon));
    }
  }, [pokemon, id]);

  // Retrieve data from local storage if no connection available
  useEffect(() => {
    if (!navigator.onLine) {
      const storedPokemonDetails = JSON.parse(
        localStorage.getItem('pokemonDetails')
      );
      const storedLocation = JSON.parse(localStorage.getItem('location'));
      dispatch(setPokemonDetails(storedPokemonDetails));
      dispatch(setLocation(storedLocation));
    }
  }, []);

  return (
    <Layout>
      {fetching ? (
        <LoaderComponent />
      ) : !fetching && pokemonDetails.id == id ? (
        <CardComponent
          pokemonDetails={pokemonDetails}
          id={id}
          location={location}
        />
      ) : (
        <FallBackComponent />
      )}
    </Layout>
  );
}
