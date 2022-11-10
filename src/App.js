import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Settingpanel from "./Components/Settingpanel";
import Slidebar from "./Components/Slidebar";
import chartjs from "./Components/chartjs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        
          <Navbar/>
          <Settingpanel />
          <Slidebar />
          <chartjs/>
          <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
