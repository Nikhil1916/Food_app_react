import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// you can write it() also it is alias for test" 
describe("loading componen",()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        // console.log(heading);
    
        //assertion (expect)
        expect(heading).toBeInTheDocument();
    });
})

test("Should load Button inside contact component",()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");
    // console.log(heading);

    //assertion (expect)
    expect(button).toBeInTheDocument();
})

test("Should Button have submit label",()=>{
    render(<Contact/>);

    const button = screen.getByText("Submit");
    // console.log(heading);

    //assertion (expect)
    expect(button).toBeInTheDocument();
})


test("Should load 2 input boxes",()=>{
    render(<Contact/>);

    //role for input is textbox
    const input = screen.getAllByRole("textbox");
    console.log(input.length , ' ******** ');

    //assertion (expect)
    // not is for negate
    expect(input.length).not.toBe(3);
    // expect().
})