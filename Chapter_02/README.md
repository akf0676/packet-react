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
## JavaScript Expressions (Child & Javascript)
By adding them in curly braces as children of the 
''' <tr> '''
 tag. These expressions that are used to specify the child components are called child expressions.

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
by using 
'''
this.props.children.
'''

React, by default, captures all the child nodes between open and close tags of a component in an array and adds it to the props of that component as this.props.children. So we can render it using {this.props. children}. We will get all Headings and Rows as this.props.children in the RecentChangesTable component. The output is the same as before, when we used the <table> tag directly

## Spread Attributes
Passing probs one by one could become cumbersome. As APIs etc change it will be dificult to keep track of the structure of the incoming data and pass it accordingly in the props. We can solve this using the *spread* attributes.

'''
   var props = { headings: headings, changeSets: data, timestamps:
   timestamps };
   ReactDOM.render(<App {...props } />,
                        document.getElementById('container'));
'''

All the properties of object are passed as props to the App component.
The order of the attributes is important though. Newer attributes override previous ones.

## JSX Gotchas
JSX is not HTML - remember this or you will run into trouble.
### Examples
If you want to pass some custom attribute that does not exist in the HTML speci cation, then React will simply ignore it.
'''
   // custom-attribute won't be rendered
   <table custom-attribute = 'super_awesome_table'>
   </table>
'''
"It must be passed as a data attribute so that React will render it."
 '''
   // data-custom-attribute will be rendered
   <table data-custom-attribute = 'super_awesome_table'>
   </table>
'''
We may also run into some issues while rendering the HTML content dynamically. In the JSX tags, we can add a valid HTML entity directly.
'''
  // Using HTML entity inside JSX tags.
   <div> Mike &amp; Shawn </div>
   // will produce
    React.createElement("div", null, " Bob & Steve ")
'''
But if we render it in a dynamic expression, it will then escape the ampersand.
'''
   // Using HTML entity inside dynamic expression
   var first = 'Bob';
   var second = 'Steve';
   <div> { first + '&amp;' + second } </div>
   var first = 'Bob';
   var second = 'Steve';
   React.createElement("div", null, " ", first + '&amp;' + second, " ")
'''
It happens as React escapes all the strings in order to prevent XSS attacks by default. To overcome it, we can directly pass the Unicode character of &amp; or we can use arrays of strings and JSX elements.
'''
   // Using mixed arrays of JSX elements and normal variables
   <div> {[first, <span>&amp;</span>, second]} </div>
   React.createElement("div", null, " ", [first,
                                      React.createElement("span", null,
 "&"), second], " ")
 '''
 as a last resort, React also allows to render raw HTML using a special dangerouslySetInnerHTML prop
 '''
    // Rendering raw HTML directly
   <div dangerouslySetInnerHTML={{__html: 'Mike &amp; Shawn'}} />
'''

### Conditionals in JSX
React embraces the idea of tying markup and logic together. We can use the power of JavaScript for loops and conditionals. But if/else logic is harder to express. Therefore, in JSX, we can't use conditional statements such as if/else - we must use a ternary operator for specifying the if/else logic.
'''
    // Using ternary operator
   <div className={ success ? 'green' : 'red' }/>
   React.createElement("div", {className:  success ? 'green' : 'red'})
'''
With large expressions it's better to of oad the logic to a block or maybe a function
'''
    // Moving if/else logic to a function
   var showResult = function() {
     if(this.props.success === true)
       return <SuccessComponent />
     else
       return <ErrorComponent />
 };
 '''
