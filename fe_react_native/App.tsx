import "expo-dev-client";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import { useQueryClient, QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import { SocketProvider } from "./src/Components/Context/Socket";


export default function App() {
  return (
    <Provider store={store}>
      <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
      </SocketProvider>
    </Provider>
  );
}
