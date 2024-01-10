import "expo-dev-client";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

export default function App() {
  return (
<<<<<<< HEAD
    
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <Navigation />
      </QueryClientProvider>
    </Provider>
=======
    <>
    {/* <SplashScreen/>  */}
    <Login/>
    {/* <ChooseAvatar/>  */}
    {/* <StartGame/> */}
    </>
>>>>>>> 49d105ff244509fb4eb101c5ea8040a14717b06e
  );
}
