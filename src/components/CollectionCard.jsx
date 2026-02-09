
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/featrures/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }

  return (
    <div>
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
       
          <div className="p-3 flex justify-end">
            <button
              onClick={()=>{
                removeFromCollection(item);
              }}
              className="bg-indigo-600 text-white rounded px-4 py-2 cursor-pointer font-medium hover:bg-indigo-700 transition"
            >
              remove
            </button>
          </div>
    
      </div>
    </div>
  );
}

export default CollectionCard
