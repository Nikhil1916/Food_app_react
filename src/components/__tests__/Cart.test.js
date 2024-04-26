import { fireEvent, render , screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../../mocks/mockRestMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("should load restaurant menu component",async ()=>{
    await act(async ()=>{
        return render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
            </Provider>
            </BrowserRouter>
    )
    })
    // const container = screen.container;
    // console.log(prettyDOM(container));
    // screen.debug()
    const accordianHeader = screen.getByText("Thalis & Combos (24)");
    console.log(accordianHeader);
    fireEvent.click(accordianHeader);
    const itemList = screen.getAllByTestId("itemList");
    console.log(itemList.length , '<-------->')
    expect(itemList.length).toBe(24);
    const add = screen.getAllByText("Add+");
    fireEvent.click(add[0]);
    const cartCount = screen.getByText("Cart(1)");
    expect(cartCount).toBeInTheDocument();

    const newItemList = screen.getAllByTestId("itemList");
    console.log(newItemList.length,'<<<<<<<<<<<<');
    expect(newItemList.length).toBe(25);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    const newItemListAfterClear = screen.getAllByTestId("itemList");
    expect(newItemListAfterClear.length).toBe(24);
})