# Chapter 02 - JSX in Depth

JavaScript XML (JSX) is an XML syntax that constructs the markup in React components. React works without JSX, but using JSX makes it easy to read and write the React components as well as structure them just like any other HTML element.

JSX makes it easy to build React components. It reduces the amount of code required to write. It looks like HTML markup. Its syntax is simple and concise and it's very easy to visualize the components that are getting built.

## Transforming JSX into JavaScript
Example:-
```
 // Input (JSX):
   var app = <App name="Andy" />;

// Output (JS):
   var app = React.createElement(App, {name:"Andy"});
```
JSX is not meant to be compiled at runtime.

## HTML tags vs React components
You can specify both HTML tags and React components in JSX.
HTML tags start with a lowercase letter and React components start with an uppercase letter.
JSX uses this convention to differentiate between the local component classes and HTML tags.

## Multiple Components
Based on the example in Chapter 01 - we will split this single component into small composable components.  These simple modular components will use other modular components with well-de ned self- contained interfaces.

Based on the following - structure
```
<table>
    {tableHeadings}
    {tableRows}
</table>
```
We could consider this Two Components - Headings and Row Components - but we can go one step further. Both headings and rows are lists of still smaller units, a Heading and a Row tag, respectively. It can be visualized as follows:
```
<table>
    <Headings>
        <Heading/>
        <Heading/>
    </Headings>
    <Rows >
        <Row/>
        <Row/>
    </Rows>
</table>
```
## JavaScript Expressions (Child )
By adding them in curly braces as children of the <tr> tag. These expressions that are used to specify the child components are called child expressions.

These are simple expressions used for passing props or evaluating some JavaScript code that can be used as an attribute value. For example 
'''
data = {data.length > 0 ? data : ''}
'''

Anything that is present in curly braces is evaluated by JSX. It works for both children expressions as well as JavaScript expressions

## JSX Comments
'''
{/* This is a comment */}
or
/* Multi
Line
Comment 
You dont need to wrap in curly braces
*/
'''

## Namespacing
React allows creating components that are namespaced under a parent component so that they don't interfere with other components or global functions.
