import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("Header component test cases", () => {
  it("Should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: 'Login'})
    // const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart (0)")
    // const loginButton = screen.getByText("Login")
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render header component with a cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/)   // we can use regex to match the string
    expect(cartItems).toBeInTheDocument();
  });


  it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "Login"}) 
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name: "Logout"}) 

    expect(logoutButton).toBeInTheDocument();
  });

});
