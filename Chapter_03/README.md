#Data Flow and Life Cycle Events

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
To validates Props, use the PropTypes, this will help ensure that the components are used correctly.