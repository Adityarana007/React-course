import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// mock fetch function because we were getting error fetch is not defined
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search Component Test Cases", () => {
  it("Should search Restaurant list with pizza text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
           <Body />  {/* render on jsDOM i.e browser like */}
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(8);

    const searchButton = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput")
    // console.log('searchInput_',searchInput)
    fireEvent.change(searchInput, {target: {value: "pizza"} }) // second param is e (e.target.value)
    fireEvent.click(searchButton)

    // assert - screen should load 3 cards
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(5);
   
  });

  it("Should filter Top Rated Restaurants", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8)

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"})
    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4)


    // expect(topRatedButton)
  })
});
