import { ThemeProvider } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-native-gesture-handler";
import { MMKV } from "react-native-mmkv";
import ApplicationNavigator from "./navigators/Application";
import "./translations";

export const storage = new MMKV();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storage={storage}>
        <ApplicationNavigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
