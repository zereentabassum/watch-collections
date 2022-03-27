import React from 'react';

const Questions = () => {
    return (
        <div className='question'>
            <h1>Questions and Answers</h1>
            <h3> <strong>Question 1: </strong> What are the differences between props and state? </h3>
            <p><strong>Ans:</strong>There are some differences between props and state. Props cannot be modified. State can be modified using this.setState . Props cannot change . State changes when user interects.Props are immutable. State are mutable.</p>
            <h3><strong>Question 2: </strong> How useState works?</h3>
            <p> <strong>Ans:</strong>UseState enables us to have state variables in components. In useState, we give a state name and set the state name. It returns a stateful value and a function to update the value. This is how useState works. </p>
           
        </div>
    );
};

export default Questions;