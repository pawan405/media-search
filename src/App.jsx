import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import NavBar from "./components/NavBar";
  import { Bounce, ToastContainer} from "react-toastify";


const App = () => {
  return (
    <div className="text-black w-full bg-gray-950">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Collection" element={<CollectionPage />} />
        <Route path="/photos" element={<HomePage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/gif" element={<HomePage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
