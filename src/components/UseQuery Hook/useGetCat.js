import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const useGetCat = (URL = "https://catfact.ninja/fact") => {
  const { data, refetch, isLoading, error } = useQuery(["cat"], async () => {
    return Axios.get(URL).then((res) => res.data);
  });

  const refetchData = () => {
    alert("DATA REFETCHED");
    refetch();
  };

  return { data, refetchData, isLoading };
};

export default useGetCat;
