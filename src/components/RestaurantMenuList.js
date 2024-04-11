import { CDN_LINK } from "../utils/constant.js";
const RestaurantMenuList = (props) => {
  // console.log(props);
  const { itemCards } = props;
  return (
    <>
      <ul>
        {itemCards?.map((data, i) => {
          return (
            <li
              style={{ lineHeight: "2em" }}
              key={data?.card?.info?.id}
              className={
                "my-1 text-left w-[75%]" +
                (i == 0 ? "border-b-8" : "border-b-2")
              }
            >
              <div className="flex justify-between items-center">
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
                  />
                  <button className="bg-slate-50 text-green-600 p-1 w-[4rem] border rounded absolute bottom-[-15px] left-[55px] shadow-lg">
                    Add
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RestaurantMenuList;
