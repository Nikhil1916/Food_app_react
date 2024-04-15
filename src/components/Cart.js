
import { useSelector } from "react-redux";
import ItemsList from "./RestaurantMenuList.js";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);

    return (
        <div className="w-[50%] text-center my-10 mx-auto rounded-lg">
            <h1 className="font-bold">Cart</h1>
            <div className="flex flex-col bg-gray-50 p-10 rounded-lg gap-8 justify-center items-center">
                <ItemsList itemCards={cartItems} showAdd={false} />
            </div>
        </div>
    )
}

export default Cart;

// {
//     cartItems?.map((item, i)=>{
//         console.log(item);
//         const {card} = item;
//         const {info} = card;
//             {/* here taking i as key as id can be same for 2 cart items eg: pizza added twice */}
//         return (
//             <div className=""  key={i}>
//                 {info.name}
//             </div>
//         )
//     })
// }