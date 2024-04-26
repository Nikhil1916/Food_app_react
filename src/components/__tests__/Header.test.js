import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Header component is renedered or leaded?",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name:'login' });
    expect(button).toBeInTheDocument();
});


test("should render header with cart itmes 0",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const noCartItems = screen.getByText("Cart(0)");
    expect(noCartItems).toBeInTheDocument();
});


test("should render header with cart is there or not",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const noCartItems = screen.getByText(/Cart/);
    expect(noCartItems).toBeInTheDocument();
});


test("should render header with cart is there or not",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const hasCart = screen.getByText(/Cart/);
    expect(hasCart).toBeInTheDocument();
});


test("should change to logout on login click",()=>{
    render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name:'login' });
    fireEvent.click(loginButton);
    const logOut = screen.getByRole("button", { name:'logout' });
    expect(logOut).toBeInTheDocument();
});