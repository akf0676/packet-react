# Chapter 02 - JSX in Depth

JavaScript XML (JSX) is an XML syntax that constructs the markup in React components. React works without JSX, but using JSX makes it easy to read and write the React components as well as structure them just like any other HTML element.

JSX makes it easy to build React components. It reduces the amount of code required to write. It looks like HTML markup. Its syntax is simple and concise and it's very easy to visualize the components that are getting built.

## Transforming JSX into JavaScript
Example:-
 // Input (JSX):
   var app = <App name="Andy" />;

// Output (JS):
   var app = React.createElement(App, {name:"Andy"});

JSX is not meant to be compiled at runtime.

## HTML tags vs React components
You can specify both HTML tags and React components in JSX.
HTML tags start with a lowercase letter and React components start with an uppercase letter.
JSX uses this convention to differentiate between the local component classes and HTML tags.