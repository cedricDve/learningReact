# Project - Getting started with React - 2

**Starter template**
    
*Questions.js*

  
```jsx
import React from 'react';
export default function Questions() {
const questions = [
{
questionText: 'What kind of car are you looking for?',
answerOptions: [
{ answerText: 'Small cars and town cars'},
{ answerText: 'Family cars'},
{ answerText: 'Berlines' },
{ answerText: 'Trucks and roadster'},
],
},
{
questionText: 'What is your budget ?',
answerOptions: [
{ answerText: 'Less than 2 500€' },
{ answerText: 'Less than 5 000€' },
{ answerText: 'Less than 10 000€' },
{ answerText: 'Neither or more than 10 000€' },
],
},
{
questionText: 'Will it be your first car ?',
answerOptions: [
{ answerText: 'Yes, my first car.' },
{ answerText: 'No, my second car' },
{ answerText: "No, but I don't know much about cars" },
{ answerText: "No, I'm an expert" },
],
},
{
questionText: 'Do you have a preference for the fuel ?',
answerOptions: [
{ answerText: 'Yes, diesel' },
{ answerText: 'Yes, gasoline' },
{ answerText: 'Yes, electric' },
{ answerText: 'No' },
],
},
];
return (
    <div className='questions'>

        <div className='question-section'>
            <div className='question-count'>
                <span>Question 1</span>/ 4
            </div>
            <div className='question-text'>This is where the question text should go</div>
        </div>

        <div className='answer-section'>
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
        </div>

    </div>
);}
```
    
*Questions.css*
    
```jsx
/* GLOBAL CLASSES */
.center-widget-h{
display: flex;
flex-direction: row;
justify-content: center;
}

/* ------------------------------------------------------- */

/* MAIN CLASS QUESTIONS */
.questions {
background-color: #252d4a;
width: 50vw;
min-width: 300px;
min-height: 200px;
height: min-content;
border-radius: 15px;
padding: 20px;
box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
display: flex;
justify-content: space-evenly;
}

/* QUESTIONS */
.question-section {
width: 100%;
position: relative;
}
.question-count {
margin-bottom: 20px;
color: #eee;
}
.question-count span {
font-size: 28px;
color: #eee;
}
.question-text {
margin-bottom: 12px;
color: #ddd;
}

/* ANSWERS */
.answer-section {
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
}

button {
width: 100%;
font-size: 16px;
color: #ffffff;
background-color: #252d4a;
border-radius: 15px;
display: flex;
padding: 5px;
justify-content: flex-start;
align-items: center;
border: 5px solid #234668;
cursor: pointer;
}

button:hover {
background-color: #555e7d;
}

button:focus {
outline: none;
}
```
    

## From static content to dynamic content

---

We are creating a List of questions, each question contains a question and an answer.

We will now change the static content into dynamic content, data from our list.

[React ES6 Array Methods](https://www.w3schools.com/react/react_es6_array_methods.asp)

**→ Getting the lengt of a list**

We can take the length of our list, and use that value (int) to show how many questions we will ask to our use. In this case whenever we would like to add more questions, it will also show the correct number ~ dynamic instead of static.

```jsx
{questions.length}

// Note we use brackets '{}' to access our questions list. 
// This way React knows we are not writing text but actual code, 
// and more exactly refering to a variable.
```

**→ Index of an array** 

```jsx
// We could take the first question, from our list of questions
{questions[0].questionText}
```

**→ Source code**

```jsx
<div className='question-section'>

	<div className='question-count'>
		<span>Question 1</span>/{questions.length}
	</div>

	<div className='question-text'>{questions[0].questionText}
	</div>
</div>
```

**→ Array iterations**

Whenever we want to access data from an array/list, we can use iterations (for, foreach).

→ We know how to access the answerOptions

```jsx
{ questions[0].answerOptions }

// Now we need to iterate over our array (answerOptions)
// to get each individual answerText
// We can use the map() function to iterate through our array
{ questions[0].answerOptions.map() }

// The map() function expects a function
{ questions[0].answerOptions.map(answerOption =>()) }
// We basicaly grab the each answerOption from our answerOptions

// Then we can use that answerOption object to call our answerText
{ questions[0].answerOptions.map(answerOption =>(answerOption.answerText)) }

// Now we can build for each answerText a button with that value

```

**→ Source Code** 

```jsx
<div className='answer-section'>
	{
		questions[0].answerOptions.map(
			answerOption =>( <button>{answerOption.answerText}</button> ))
	}
</div>
```

## React Hooks - State

---

To store the value of the selected questions, we will use the state hook from react - useState().

[Using the State Hook - React](https://reactjs.org/docs/hooks-state.html)

1. **import useState from React**

```jsx
import React, {useState} from 'react';
```

1. **Initialize state → useState()**

```jsx
// Initialize State using useState()
const [currentQuestion, setCurrentQuestion] = useState(0);
```

<aside>
⚠️ Note the naming conventions!
→ camelCase → nameChoosen, setNameChoosen

</aside>

1. Use our create state variable → currentQuestion
    
    We can now replace our index → the 0's inside our arrays(calling first element of the array)
    
    by our currentQuestion → note we initialized it with a default value = 0 (number)
    
    **→ Source Code**
    
    ```jsx
    <div className='question-section'>
    	<div className='question-count'>
    		{/* Note we can access the currenQuestion and add one(index starting at 0)
    		    To display the currentQuestion of the user */}
    		<span>Question {currentQuestion + 1}</span>/{questions.length}
    	</div>
    	<div className='question-text'>
    		{ questions[currentQuestion].questionText}
    	</div>
    </div>
    ```
    
2. **Change our state dynamicaly**
    
    Whenever a user clicks on questionAnswer(button), we would like to show the next question.
    We can do this by changing the state(the current value) of currentQuestion.
    
    By adding 1 to the currentQuestion we can go to the next question.
    
    [ currentQuestion = 0  →  0 +1 = 1 → currentQuestion = 1 ]
    
    This state change should only happen whenever a user clicks on the button, 
    therefore we can create a onClickHandler and then link that onClickHandler to our button.
    → This will basicaly handle the click(event) and the action that should occur whenever the user clicks on the button (in our case change the state of our currentQuestion).
    
    Let's recap
    

```jsx
// First we add an onClick event to our button
// By adding onClick= {} inside our <button>
// Then we provide our onClickHandler
<button onClick={onClickHandler}>{answerOption.answerText}</button>

// Next we need to create the onClickHandler
// Therefore, create an anonyme function that will change the state
// of the currentQuestion (by adding 1), and set that function equal to our onCLickHandler

// Create onClickHandler
    const onClickHandler = () => {
        // Note we can't do currentQuestion++  -> const!
        // So we create a temp variable called 'nextQuestion' that is equal to the currentQuestion + 1
        const nextQuestion =  currentQuestion +1;
        // Change the state -> currentQuestion => nextQuestion
        setCurrentQuestion(nextQuestion)
        // Note we call setCurrentQuestion to set a new value, to change the state of our currentQuestion.
    }

// Try it out! 
```

**→ Complete source code**

```jsx
import React, {useState} from 'react';
import './Questions.css';

export default function Questions() {
const questions = [
{
questionText: 'What kind of car are you looking for?',
answerOptions: [
{ answerText: 'Small cars and town cars'},
{ answerText: 'Family cars'},
{ answerText: 'Berlines' },
{ answerText: 'Trucks and roadster'},
],
},
{
questionText: 'What is your budget ?',
answerOptions: [
{ answerText: 'Less than 2 500€' },
{ answerText: 'Less than 5 000€' },
{ answerText: 'Less than 10 000€' },
{ answerText: 'Neither or more than 10 000€' },
],
},
{
questionText: 'Will it be your first car ?',
answerOptions: [
{ answerText: 'Yes, my first car.' },
{ answerText: 'No, my second car' },
{ answerText: "No, but I don't know much about cars" },
{ answerText: "No, I'm an expert" },
],
},
{
questionText: 'Do you have a preference for the fuel ?',
answerOptions: [
{ answerText: 'Yes, diesel' },
{ answerText: 'Yes, gasoline' },
{ answerText: 'Yes, electric' },
{ answerText: 'No' },
],
},
];
// Initialize State using useState()
const [currentQuestion, setCurrentQuestion] = useState(0);

// Create onClickHandler
const onClickHandler = () => {
    // Note we can't do currentQuestion++  -> const!
    // So we create a temp variable called 'nextQuestion' that is equal to the currentQuestion + 1
    const nextQuestion =  currentQuestion +1;
    // Change the state -> currentQuestion => nextQuestion
    setCurrentQuestion(nextQuestion)
    // Note we call setCurrentQuestion to set a new value, to change the state of our currentQuestion.
}

return (
	<div className='questions'>

        <div className='question-section'>
            <div className='question-count'>
             {/* Note we can access the currenQuestion and add one(index starting at 0)
                 To display the currentQuestion of the user */}
                <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>

        <div className='answer-section'>
            {
                questions[currentQuestion].answerOptions.map(
                    answerOption =>( <button onClick={onClickHandler}>{answerOption.answerText}</button> ))
            }
        </div>

	</div>
);}
```