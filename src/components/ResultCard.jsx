import React from "react";

const ResultCard = ({ item }) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem('collection')) || [];
    const newData = [...oldData, item];
    localStorage.setItem('collection', JSON.stringify(newData));
  };
  return (
    <div className="w-[18vw] bg-zinc-900 rounded overflow-hidden">
      <div className="h-60 relative overflow-hidden">
        <a href={item.url}>
          {item.type === "photo" ? (
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={item.thumbnail || item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type === "video" ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              src={item.src}
            ></video>
          ) : (
            ""
          )}
          {item.type === "gif" ? (
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={item.thumbnail}
              alt=""
            />
          ) : (
            ""
          )}
        </a>
      </div>
      {item.type !== "gif" ? (
        <div className="p-3 flex items-center justify-between gap-2">
          <h1 className="text-white text-sm truncate flex-1">{item.title}</h1>
          <button className="bg-indigo-600 text-white rounded px-4 py-2 cursor-pointer font-medium hover:bg-indigo-700 transition whitespace-nowrap">
            Save
          </button>
        </div>
      ) : (
        <div className="p-3 flex justify-end">
          <button  onclick={()=>{
            addToCollection(item)
          }}
          className="bg-indigo-600 text-white rounded px-4 py-2 cursor-pointer font-medium hover:bg-indigo-700 transition">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
