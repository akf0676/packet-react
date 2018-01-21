## Composite Dynamic Components and Forms

Focus on multiple dynamic components, and bulding forms with React.

Following points will be covered:-
* Controlled and uncontrolled components
* Form elements
* Form events and handlers
* Multiple dynamic components with interactivity

This will be a prototype for an online bookstore where people can buy different books.
There will be a lot of form interations such as:-
* Things related to placing an order, 
* Taking user's delivery and billing information, etc etc
* Bootstrap CSS is going to be utilised to beautify the app
* Babel wil be used to conver our ES6 and JSX code to Javascript
* Webpack, will be used to bundle the Javascript from our app and place itin static/bundle.js

## Getting Started with Forms
Forms behave differentl in React.  Form comonents are mutated when the user interacts with them. You must take care that we are managing interactions properly.
Input - Examples can be see within CH04-ScratchPad.html

## Bookstore
### Task 1 - Getting Started
Build a form wizard, modeling all the steps that the user will take while using the online bookstore.
- We will start with a form, where the user selects the book that they want to buy
- In the next step, the user will enter the information related to the billing and shipping address
- After this, the user needs to choose a delivery mechanism
- In the end, the user will confirm the transaction and place the order

This will be 4 forms, but controlled by a single parent.
The parent will keep a track of the state that the user is in and will render a for this step.
#### Parent Child relationship - Communicating with the parent component.
The easiest way for a child to communicate with the parent is via props.
Eventhough, props are generally the attributes or properties that are sent to a child.
In order for a child to communicate with the parent using props we will need to use the   {} syntax. 
You can pass any valid expression as a prop. You can pass a function callback as prop to a child component. A child can call it to update the state of the parent.

#### Error Checking
Use state to manage the validation errors. 
- Initially, it will be set to false. 
- After a user submits a form, we will check whether the user has not selected anything and set an appropriate error message. 
- State will be updated and it will display the error message accordingly. 
- If the user has selected at least one book, then the error state will be set to false and the error message won't be displayed.