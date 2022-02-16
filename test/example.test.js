import { renderToDos } from "../render-utils.js";


const test = QUnit.test;

test('completed test will return <li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderToDos(todo){

    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('incomplete test will return <li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderToDos(todo){
        
    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});