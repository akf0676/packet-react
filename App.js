// Chapter 02 - create composable comonetnst in smaller chunks
var Title = React.createClass({
  render: function() {
    return (<h1>{this.props.title}</h1>);
  }
});
var Heading = React.createClass({
  render: function() {
    // assumption that heading will receive this as a prop
    return (<th>{this.props.heading}</th>);
  }
});

var Row = React.createClass ({
  render: function() {
    // The Row will receive a changeSet object in its props
    return (<tr>
              <td>{this.props.changeSet.when}</td>
              <td>{this.props.changeSet.who}</td>
              <td>{this.props.changeSet.description}</td>
            </tr>
            );
  }
});
// Headings will get a list of titles passed to it.
var Headings = React.createClass({
  render: function(){
    var headings = this.props.headings.map(function(heading) {
      return (<Heading heading = {heading} />);
    });

    return (<thead><tr>{headings}</tr></thead>);
  }
});

var Rows = React.createClass ({
  render: function() {
    var rows = this.props.changeSets.map(function(changeSet){
      return (<Row changeSet = {changeSet} />);
    })
    return (<tbody>{rows}</tbody>);
  } 
});

var App = React.createClass({
  render: function() {
      // Of important note - until React 16 - you can only return one node!!!
      return (
          <div>
              <Title title = {this.props.title} />
              <table className="table">
                  <Headings headings = {this.props.headings} />
                  <Rows changeSets = {this.props.changeSets} />
              </table>
          </div>
      )
  }
})

ReactDOM.render(<App title={title} headings = {headings} changeSets = {data}/>,  document.getElementById('App'))