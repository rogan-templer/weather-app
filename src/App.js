import { Route } from "react-router-dom";

import Auckland from "./components/Auckland";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <h1>Weather Watch</h1>
      <Route exact path="/" component={Landing} />
      <Route path="/Auckland" component={Auckland} />
    </div>
  );
}

export default App;
