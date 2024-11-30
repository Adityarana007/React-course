import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import ItemsList from "../ItemsList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <ItemsList />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  // get accordian
  const accordianHeader = screen.getByText("Party Combo (7)");
  fireEvent.click(accordianHeader);
  // get food items
  const foofItems = screen.getAllByTestId("foodItems");
  console.log("foofItems__", foofItems.length);
  expect(foofItems.length).toBe(7);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  // find add button
  const addButtons = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  // Now we are clearing cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  expect(screen.getByText("No items in the cart")).toBeInTheDocument();
});
