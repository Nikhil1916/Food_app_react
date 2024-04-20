import { Sum } from "../Sum"

test("Sum function should calculate the sum of two numbers",()=>{
    const sum = Sum(3,4);

    // assertion
    expect(sum).toBe(7);
})