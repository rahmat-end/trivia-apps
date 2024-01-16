/** @format */

import AppRouter from "./router/AppRouter.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import { useLogin } from "./auth/hooks/useLogin.tsx";
import { useEffect } from "react";

const App = () => {
  const { saveDatauser } = useLogin();
  useEffect(() => {
    saveDatauser();
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
