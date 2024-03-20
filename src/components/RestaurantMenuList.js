const RestaurantMenuList = (props) => {
    const {itemCards} = props;
    return (
        <div >
        <ul>
            {
                itemCards?.map((data,i)=>{
                    return <li style={{marginLeft:'2em', lineHeight:'2em'}} key={data?.card?.info?.id}>{data?.card?.info?.name} - {"Rs." + (data?.card?.info?.price/100 || data?.card?.info?.defaultPrice/100)}</li>
                })
            }
        </ul>
        </div>
    )
}

export default RestaurantMenuList;