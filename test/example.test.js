import { renderToDo } from '../render-utils.js';

const test = QUnit.test;

test('completed todo will return a <li> with a complete class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="complete">file taxes</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderToDo({ description: 'file taxes', complete: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('incompleted todo will return a <li> with a complete class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>get groceries</li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderToDo({ description: 'get groceries', complete: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
