import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import RestaurantCard, { withNewlyOpened } from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json';
const RestaurantCardNewlyOpened = withNewlyOpened(RestaurantCard);


describe("Restaurant card Test cases", () => {
    it("should render Restaurant Card component with props data", () => {
        render(<RestaurantCard resData={MOCK_DATA}/>)

        const name = screen.getByText("Domino's Pizza")
        expect(name).toBeInTheDocument();

    })

    it("should render Restaurant Card component with newly opened label", () => {
        render(<RestaurantCardNewlyOpened resData={MOCK_DATA}/>)

        const name = screen.getByText("Newly Opened")
        expect(name).toBeInTheDocument();

    })
})