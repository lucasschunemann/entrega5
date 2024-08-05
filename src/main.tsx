import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!); // Adicionando "!" para garantir que o contêiner não seja nulo.

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
