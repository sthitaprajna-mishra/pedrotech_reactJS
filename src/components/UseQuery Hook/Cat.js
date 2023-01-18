import React from "react";
import useGetCat from "./useGetCat";

const Cat = () => {
  const { data, refetchData, isLoading } = useGetCat();
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};

export default Cat;
