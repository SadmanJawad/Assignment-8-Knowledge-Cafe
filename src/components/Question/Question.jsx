import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-container">
      {/* ques 1 */}
      <h4>Q1: What is the difference between props and state?</h4>
      <p>
        Ans: Props (short for "properties") are used to transfer data from one
        component to another. They are read-only and unmodifiable within the
        child component. Props are used to customize a component based on data
        from its parent.
        <br />
        The management of data inside a component, on the other hand, is done
        via state. It's used to record data that can change over time, such user
        input or the outcomes of an API request. The setState method in the
        component may be used to update state, and when the state changes, the
        component is re-rendered with the new data.
        <br />
        In summary, props are used to pass data from a parent component to a
        child component, while state is used to manage data within a component.
      </p>
      {/* ques 2 */}
      <h4>Q2: How doe the useState works?</h4>
      <p>
        Ans: A React Hook called useState lets you add state to a functional
        component. It returns two values in an array: the current state and an
        update function. When the set function is called, the Hook returns an
        updated state value from the initial state value it receives as an
        argument.
      </p>
      {/* ques 3 */}
      <h4>Q3: How does the useEffect works?</h4>
      <p>
        Ans: useEffect is capable of triggering animation in a new array,
        validating input fields, and fetching API data.
      </p>
      <h4>Q4: How does REACT works?</h4>
      <p>
        Ans:    The user interface is developed using React in the form of isolated pieces of code called components. The accept arbitrary inputs, also known as props, and react components function in a similar manner to the javascript function.
        React is a JavaScript library for building user interfaces. The basic steps to use React are: <br />
        1. Install React <br />
        2. Set up your project <br />
        3. Create components <br />
        4. Define state and props <br />
        5. Render components <br />
        6. Handle events <br />
        7. Update state <br />
      </p>
    </div>
  );
};

export default Question;
