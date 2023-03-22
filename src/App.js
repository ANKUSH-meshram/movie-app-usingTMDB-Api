import { Route, Routes } from "react-router-dom";
import Banner from "./components/hero/Banner";
import Navbar from "./components/hero/Navbar";


function App() {
  return (
    <div className="App-container relative w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner/>} />
      </Routes>
    </div>
  );
}
  
export default App;
