import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Settingpanel from "./Components/Settingpanel";
import Slidebar from "./Components/Slidebar";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Settingpanel />
      <Slidebar />
      <Footer />
    </Router>
  );
}

export default App;
