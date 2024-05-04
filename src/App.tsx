import { Provider as ReduxProvider } from "react-redux";

import "./styles/global.css";

import { store } from "./store";
import { Player } from "./pages/Player";

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  );
}
