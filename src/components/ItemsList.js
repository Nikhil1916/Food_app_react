import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { CDN_LINK } from "../utils/constant.js";

const ItemsList = (props) => {
  const { itemCards } = props;
  let { showAdd } = props;
  showAdd = showAdd == undefined ? true : false;
  console.log(showAdd, 'showAdd');
  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    console.log(data);
    //dispatch an action
    dispatch(addItem(data));
  }
  return (
    <>
      <ul>
        {itemCards?.map((data, i) => {
          return (
            <li
              style={{ lineHeight: "2em" }}
              key={data?.card?.info?.id}
              className={
                "my-1 text-left border-b-2"
              }
            >
              <div data-testid="itemList" className="flex justify-between items-center">
                <div className="w-[75%]">
                  <p className="text-left">
                    {data?.card?.info?.name} -{" "}
                    {"Rs." +
                      (data?.card?.info?.price / 100 ||
                        data?.card?.info?.defaultPrice / 100)}
                  </p>
                  <p className="text-xs text-left">
                    {data?.card?.info?.description}
                  </p>
                </div>
                <div className="relative box-border mb-6 w-[25%]">
                  <img className="w-[100%] rounded-lg mb-2"
                    src={
                      CDN_LINK + "a1b474576d7b2801cfd53a77475d5cbe" ||
                      data?.card?.info?.imageId
                    }
                    // doing this as swiggy api is not working
                    // src={require("../utils/foodimg.avif")}
                  />
                   {
                    showAdd ?  <button onClick={()=>handleAddItem(data)} className="bg-slate-50 text-green-600 p-1 w-[4rem] border rounded absolute bottom-[-15px] left-[65px] shadow-lg">
                    Add+
                  </button>: ''
                  }
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemsList;
