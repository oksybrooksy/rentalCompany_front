import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
