/* eslint-disable jsx-a11y/alt-text */
import { FallBackComponent } from '@/components/fallback';
import Layout from '@/components/layout';
import { LoaderComponent } from '@/components/loader';
import { useRouter } from 'next/router';
import { CharacteristicsCard } from '@/components/characteristicsCard';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacteristics, setFetching } from '@/store/store';
import { useEffect, useState } from 'react';

export default function Characteristics() {
  const router = useRouter();
  const { id, name } = router.query;
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.fetching);
  const [error, setError] = useState(false);

  async function fetchCharacteristicsById(id) {
    dispatch(setFetching(true));
    try {
      const res = await fetch(`/api/getCharacteristicsById?id=${id}`);
      const data = await res.json();
      setError(false);
      dispatch(setCharacteristics(data));
    } catch (err) {
      setError(err);
    }
    dispatch(setFetching(false));
  }

  useEffect(() => {
    id && fetchCharacteristicsById(id);
  }, [id]);

  return (
    <Layout>
      {fetching && <LoaderComponent />}
      {!fetching && !error && <CharacteristicsCard id={id} name={name} />}
      {!fetching && error && <FallBackComponent />}
    </Layout>
  );
}
