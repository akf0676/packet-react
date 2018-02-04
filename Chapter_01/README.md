# Chapter 01 - Getting Started

## What is React?

ReactJS - tries to solve the problem at the View layer.
It creates abstract represensations of views
The view is broken into parts known as  Components

### Components

Componets ecompass bothe the log to handle the display and the view itself.  It can contain data used to render the state of the app.

React will do a full render of the application, to avoid complecity of interactions & subsequent render processing. This creating a simple workflow.

### Virtual DOM

DOM manipulation is expensive & should be minimised. DOM manipulation by hand will result in a lot of boilerplate code, which is error-prone, boring, and repetitive.

React provides a virtual DOM to render to instead of the actual DOM. 
It  determines the difference between the real DOM and virtual DOM and undertake the minimum number of DOM operations required to update.

### Declarative

When data changes, React conceptually hits the refresh button and only updates what has changed. 
This simple  flow of data, coupled with dead simple display logic, makes development straightforward and simple to understand.
