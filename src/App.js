import React from "react";
import Cat from "./components/UseQuery Hook/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>
    </div>
  );
};

export default App;
