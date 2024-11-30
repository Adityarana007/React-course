const { render, screen } = require("@testing-library/react")
const { default: Contact } = require("../Contact")
import "@testing-library/jest-dom"

describe("Contact us page test cases", () => {

    // beforeAll(()=>{
    //   console.log('Before all')  
    // })
    // beforeEach(()=>{
    //   console.log('before each')  
    // })

    // afterAll(()=>{
    //     console.log('After all')  
    //   })
    //   afterEach(()=>{
    //     console.log('After each')  
    //   })

    it("Should load contact us component", () => {

        render(<Contact/>)  // render on jsDOM i.e browser like
    
        const heading = screen.getByRole("heading");   // Find heading inside rendered screen
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    
    test("should button load", () => {
    
        render(<Contact/>)
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        // assertion
        expect(button).toBeInTheDocument();
    
    })
    
    test("should load input by placeholder", () => {
    
        render(<Contact/>)
    
        // const button = screen.getByRole("button");
        // const button = screen.getByText("Submit");
        const placeholder = screen.getByPlaceholderText("message");
    
        // assertion
        expect(placeholder).toBeInTheDocument();
    
    })
    
    it("Should load 2 input boxes when component loads", () => {
        render(<Contact/>)
        const inputboxes = screen.getAllByRole("textbox");  // Returns JSX element (React element)/ Object/ React Fiber Node
        expect(inputboxes.length).toBe(2);
        expect(inputboxes.length).not.toBe(3);
    })
})

