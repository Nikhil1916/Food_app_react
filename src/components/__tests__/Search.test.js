import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// RestaurantCard

//creating a dummy fetch function exactly like the orignal one
//this is also good info how a fetch works internally , fetch returns a promise which has a json(object) which has a json function which retuen a promise again 
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("it should render the body component on search with pizza values",async ()=>{
    await act(async () => {
      return render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );
    });

    // render(<RestaurantCard/>)
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    // console.log(cardsBeforeSearch.length);
    expect(cardsBeforeSearch.length).toBe(9);
    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput);
    //here the object(it is basically event which we r passing e.target.value) is same as the call back function which we get on change then we do e.target.value
    fireEvent.change(searchInput,{target:{value:"pizza"}})
    // console.log(searchBtn);
    fireEvent.click(searchBtn);
    const restCard = screen.getAllByTestId("resCard");
    // console.log(restCard);
    //assert screen should have 1 card
    expect(restCard.length).toBe(2);
    //this expectation can change as api response keeps on changing then u have to change the mock data also
});




it("it should render the top rated restaurant",async ()=>{
    await act(()=>{
        return render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    });
    const filterBtn = screen.getByText("Top Rated Restaurants");
    fireEvent.click(filterBtn);
    const restCars = screen.getAllByTestId("resCard");
    // console.log(restCars?.length, restCarsBeforeFilter?.length , " ------ ");
    expect(restCars.length).toBe(6);
        //this expectation can change as api response keeps on changing then u have to change the mock data also
});


