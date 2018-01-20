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
ReactDOM.render(<InputExample />, document.getElementById('CLC'));