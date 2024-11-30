import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("Should load restaurant menu component", async() => {
    await act(async() => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <Cart/>
            <RestaurantMenu/>

        </Provider>
        </BrowserRouter>
))

// get accordian
    const accordianHeader = screen.getByText("Cheese Volcano (8)");
    fireEvent.click(accordianHeader)
    // get food items
    const foofItems = screen.getAllByTestId("foodItems");
    expect(foofItems.length).toBe(8)

    // find add button
    const addButtons = screen.getAllByRole("button", {name: "ADD"})
    console.log('addButtons',addButtons.length)
    fireEvent.click(addButtons[0])

    const getHeaderCartItems = screen.getByText("Cart (1)")
    expect(getHeaderCartItems).toBeInTheDocument()

    fireEvent.click(addButtons[1])
    expect(screen.getByText("Cart (2)")).toBeInTheDocument()

    fireEvent.click(addButtons[2])
    expect(screen.getByText("Cart (3)")).toBeInTheDocument()


    const cartItems = screen.getAllByTestId("cartItemList");
    console.log('cartItems___', cartItems.length)
    expect(cartItems.length).toBe(3)

    const cartItemsAfterClear = screen.getAllByTestId("cartItemList");
    const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})
    fireEvent.click(clearCartBtn)
    console.log('cartItems___after', cartItemsAfterClear.length)


    expect(cartItemsAfterClear.length).toBe(0)

   expect(screen.getByText("No items in the cart")).toBeInTheDocument()


})