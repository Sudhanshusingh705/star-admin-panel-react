import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Settingpanel from "./Components/Settingpanel";
import Slidebar from "./Components/Slidebar";
import chart from "./Components/chart";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Settingpanel />
      <Slidebar />
      <charts />
      <Footer />
    </Router>
  );
}

export default App;
