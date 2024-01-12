/** @format */

// import React from "react";
import AppRouter from "./router/AppRouter.tsx";
import { QueryClientProvider, QueryClient } from "react-query";


const App = () => {


  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </>
  );
};

export default App;
