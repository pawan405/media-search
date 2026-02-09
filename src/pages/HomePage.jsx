import { Link } from "react-router-dom";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
      <div className="text-center p-5 bg-blue-900 text-2xl font-[helvetica neue]">
        Media Search
        
      </div>
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
