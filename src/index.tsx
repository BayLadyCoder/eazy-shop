import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Provider>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
