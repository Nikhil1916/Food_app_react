import { render , screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json"
import "@testing-library/jest-dom";
it("should render Restaurant card component with mock data",()=>{
    render(<RestaurantCard resData = {MOCK_DATA} />);
    const isBakeFresh = screen.getByText("Bake Fresh (Model Town)");
    expect(isBakeFresh).toBeInTheDocument();
})

it("should render Restaurant card component with Promoted label",()=>{
    // test higher order component with promoted label
    render(<RestaurantCard resData = {MOCK_DATA} />);
    const isBakeFresh = screen.getByText("Bake Fresh (Model Town)");
    expect(isBakeFresh).toBeInTheDocument();
});

it("check Restaurant Promoted Card component loaded",()=>{
    const HocComponent = withPromotedLabel(RestaurantCard);
    render(<HocComponent resData = {MOCK_DATA} />)
    const isBakeFresh = screen.getByText("Bake Fresh (Model Town)");
    expect(isBakeFresh).toBeInTheDocument();
})