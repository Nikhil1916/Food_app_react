
import { useSelector } from "react-redux";
import ItemsList from "./RestaurantMenuList.js";
import { clearCart, clearCart } from "../utils/cartSlice.js";
import {useDispatch} from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    if(cartItems?.length == 0) {
        return (<h1 className="text-center my-4 font-bold">Cart is Empty.Please Add Items</h1>);
    }
    return (
        <div className="w-[50%] text-center my-10 mx-auto rounded-lg">
            <h1 className="font-bold mb-2">Cart</h1>
            <button className="bg-gray-100 p-3 my-2 rounded-lg" onClick={()=>{
                dispatch(clearCart());
            }}>Clear Cart</button>
            <div className="flex flex-col bg-gray-50 p-10 rounded-lg gap-8 justify-center items-center">
                <ItemsList itemCards={cartItems} showAdd={false} />
            </div>
        </div>
    )
}

export default Cart;
