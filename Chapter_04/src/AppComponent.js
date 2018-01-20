//@ts-check

/* Example of a Controlled Component 
    - the field is read only 
    - this is because we are setting the value prop
*/

var InputExample = React.createClass({
    render() {
        return (
            <input type="text" value="Andy" />
        );
    }
});

/* Input Mutable Version
    - Use State instead of props
    - This pattern of making the value of an input based on state 
    - Updating the state based on the user interaction makes it very easy to respond to user interactions. 
    - Makes it possible to do some housekeeping things such as validating the input
*/
var InputMutableExample = React.createClass({
    getInitialState() {
        return (
            {name: '-'}
        );
    },
    handleChange: function(event) {
        this.setState(
            { name: event.target.value.toUpperCase() }
        );
    },
    render() {
        return (
          <input type="text"
                 value={this.state.name}
                 onChange={this.handleChange} />
 ); }
 });

 /* Uncontrolled Components
    - Where the value prop is not passed to the input
*/
var InputUncontrolled = React.createClass({
    render() {
        return (
          <input type="text" />
        ); 
    }
 });
  /* Uncontrolled Components
    - Where the value prop is not passed to the input
*/
var InputUncontrolledDefaultValue = React.createClass({
    render() {
        return (
          <input type="text" defaultValue="Andy" />
        ); 
    }
 });
ReactDOM.render(<InputExample />, document.getElementById('IE'));
ReactDOM.render(<InputMutableExample />, document.getElementById('IEV2'));
ReactDOM.render(<InputUncontrolled />, document.getElementById('IEV3'));
ReactDOM.render(<InputUncontrolledDefaultValue />, document.getElementById('IEV4'));