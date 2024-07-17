import { StatusBar }from 'expo-status-bar';
import { Home } from "../src/screens/Home/Home";

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#232F3E" />
      <Home />
    </>
  );
}
