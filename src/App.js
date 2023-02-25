import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import { UserContextProvider } from "./context/UserContext";
import { AppProvider } from "./strony/AppProvider";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <AppProvider>
          <UserContextProvider>
            <Layout />
          </UserContextProvider>
        </AppProvider>
      </Router>
    );
  }
}

// //function App() {
//   class App extends Component {
//   render(){
//   return (
//     <AppProvider>
//       <UserContextProvider>
//         <Layout />
//       </UserContextProvider>
//     </AppProvider>
//   );
// }

/*
  return (
    <Router>
      <AppProvider>
        <Layout />
      </AppProvider>
    </Router>
  );
}
*/
export default App;
