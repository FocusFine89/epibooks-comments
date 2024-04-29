import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import history from "./data/history.json";
import romance from "./data/romance.json";

import Footer from "./components/FooterBar";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
import { Component } from "react";

class App extends Component {
  getId(id) {
    this.setState({ idLibro: id });
  }
  render() {
    return (
      <div className="App">
        <TopBar />
        <Welcome />
        <AllTheBooks books={horror} />
        <Footer />
      </div>
    );
  }
}

export default App;
