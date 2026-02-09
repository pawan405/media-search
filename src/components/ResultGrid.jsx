import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/featrures/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading(true));
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            console.log("Photos API Response:", response);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
            console.log("Processed Photos Data:", data);
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            console.log("Videos API Response:", response);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
            console.log("Processed Videos Data:", data);
          }
          if (activeTab == "gif") {
            let response = await fetchGIF(query);
            console.log("Full GIF API Response:", response); // Log the whole response
            data = response.data.map((item, index) => {
              if (index === 0) {
                // Log only the first item to avoid flooding the console
                console.log("First GIF item structure:", item);
              }
              return {
                id: item.id,
                title: item.title || "GIF",
                type: "gif",
                thumbnail: item.images.fixed_height_small.url, // Correct path
                src: item.images.original.url, // Correct path
                url: item.url,
              };
            });
            console.log("Processed GIF Data:", data);
          }
          dispatch(setResults(data));
        } catch (err) {
          console.error("An error occurred:", err);
          dispatch(setError(err.message));
        } finally {
          dispatch(setLoading(false));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            
             
              <ResultCard item={item} />
            
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
