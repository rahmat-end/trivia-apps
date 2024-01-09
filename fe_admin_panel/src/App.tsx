/** @format */

// import React from "react";
import AppRouter from "./router/AppRouter.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const test = async () => {
    try {
      const response = await axios.get("http://192.168.18.169:8001/api/user");
      console.log(response.data);
      
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  };

  useEffect(() => {
    test();
  }, []);

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
