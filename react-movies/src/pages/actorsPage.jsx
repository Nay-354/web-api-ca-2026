import React from "react";
import { getActors } from "../api/tmdb-api";
import ActorList from '../components/actorList';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const PeoplePage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['actors'],
    queryFn: getActors,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data?.results || [];

  return (
    <>
      <h1>Discover Actors</h1>
      <ActorList actors={actors} />
    </>
  );
};

export default PeoplePage;