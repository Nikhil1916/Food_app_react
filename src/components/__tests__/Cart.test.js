import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve('data');
        }
    })
})
it("should load restaurant menu component",async ()=>{
    await act(()=>{
        render(<RestaurantMenu/>)
    })
})