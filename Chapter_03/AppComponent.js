// @ts-check
console.log("00 - Component Life Cycle Example");

var App = React.createClass({

    getDefaultProps: function() {
        console.log('01 - getDefaultProps')
        return { name: 'John'};
    },
    getInitialState: function() {
        console.log('02 - getInitialState')
        return { status: true };
    },
    componentWillMount: function() {
        console.log('03 - componentWillMount');
    },
    render:  function(){
        console.log("04 - Render");
        return <h1 onClick={this.toggleState}>{this.state.status.toString()}</h1>
    },
    componentDidMount: function() {
        console.log('05 - componentDidMount');
    },
    componentWillReceiveProps: function(nextProps) {
        console.log("05 - componentWillReceiveProps")
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('06 - shouldComponentUpdate');
        return false;
    },
    componentWillUpdate: function() {
        console.log('07 - componentWillUpdate');
    },
    componentWillUnmount: function() {
        console.log('03 - componentWillUnmount');
    },
    toggleState: function() {
        this.setState({status: !this.state.status})
    }
});

   /* List of methods and signatures for reference
   * componentWillMount
   * componentDidMount
   * componentWillReceiveProps(object nextProps)
   * boolean shouldComponentUpdate(object nextProps, object nextState)
   * componentWillUpdate(object nextProps, object nextState)
   * componentDidUpdate(object prevProps, object prevState)
   * componentWillUnmount()
   */
  ReactDOM.render(<App name='Jane' />,  document.getElementById('CLC'))