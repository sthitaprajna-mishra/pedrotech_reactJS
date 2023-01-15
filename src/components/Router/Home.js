import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  let navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) return <h2>Error</h2>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/contact")}>
        Change to contact page
      </button>
      <h1>Random Cat Fact #n</h1>
      <h2>{data?.fact}</h2>

      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default Home;
