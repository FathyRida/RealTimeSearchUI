import React from "react";
import ReactDOM from "react-dom";
import { SearchkitManager, SearchkitProvider } from "searchkit";

import App from "./App";

const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/");

ReactDOM.render(
  <SearchkitProvider searchkit={searchkit}>
    <div>
      <App />
    </div>
  </SearchkitProvider>,
  document.getElementById("root")
);
