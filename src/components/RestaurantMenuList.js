const RestaurantMenuList = (props) => {
  console.log(props);
  const { itemCards } = props;
  return (
    <div>
      <ul>
        {itemCards?.map((data, i) => {
          return (
            <li
              style={{ lineHeight: "2em" }}
              key={data?.card?.info?.id}
              className="my-2 text-left border-b-2 py-2"
            >
              <p className="m-1">{data?.card?.info?.name} -{" "}
              {"Rs." +
                (data?.card?.info?.price / 100 ||
                  data?.card?.info?.defaultPrice / 100)}
                  </p>
                  <p className="text-xs text-gray-400">
                    {
                      data?.card?.info?.description
                    }
                  </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenuList;
