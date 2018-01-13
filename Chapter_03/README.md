##Data Flow and Life Cycle Events

* Data flows in React
* Props
* PropTypes
* State
* State versus props
* When to use state and props
* Component life cycle overview
* Component life cycle methods

## Data flows in React
By default, all the data  flows only in one direction: from parent component to child component.  This makes the job of the child component simple and predictable. Take props from the parent and render.

A component is the owner of a child component if that child gets created in the render method of the parent. 

**A component should not mutate its props** this makes React's behavior consistent as well as fast.

Props can be accessed by `this.props`,  if anything in the parent's props changes, React will make sure that changes are flown downstream and will ew-render the componet tree. 

## Props Validation
To validates Props, use the PropTypes, this will help ensure that the components are used correctly. PropTypes are only checked in development, to check the assumptions we are making about components are being met.

Along with standard types, it is also possible to validate custom types. See Example in Chapter 03 Commit  Chapter 03 - Props and PropTypes
Custom PropType Validation with Warning Message for Headings [e7c20cf]

## Specifying default props
You are able to define some default values for props. This is useful when parent component is passing props based on some condition or not passing some props at all due to some change,

## Modifying this.props.children
`this.props.children` is a special prop, as React captures all the children that are present in the opening and closing tag into props that can be accessed. Some of this adjustment to App.js was done in the coding in Chapter 02

##State
Every component can have its own state in React. The main difference between state and props is that props are passed to the component from the parent component; whereas, state is something that is internal to the component.

Props are passed with the compone is instantiated, State is something that can change over time.  Changes in state affect the rendering of components.
**State should be introduced only when it is required**.

###Setting initial state
The initial state can be set using the getInitialState function.
State can be accessed similar to props using this.state.

###Setting State
Updating state is also easy using the setState() function.

###Avoding State
If a component does not change, then there is no need to use state. It's better to depend on props passed by the parent component in that case. This also avoids re-rendering of the component again and again as changes to state initiate a re-render of the component.

###State versus props
Important to understand the difference between props and state and where to use what.
####Props
Props are immutable (unable to be changed). They are owned by the component which passes them to some other component.
####Sate
Is internal and private to the component. State can and will change depedning on interactions.
State should store simple data, ie a CSS class that hides or displays the component.
Avoid duplicating props in state.

##Componet Life Cycle Overview
A component goes through differnt life cycle events. They help facilitate when we should initialise which part of the compont or when data is fetched. [url]https://www.bigbinary.com/videos/keep-up-with-reactjs/react-life-cycle-methods-in-depth