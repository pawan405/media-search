import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <div className="text-black w-full bg-gray-950">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default App;
