// Chapter 02 - create composable components in smaller chunks
// Namespacing - Creating a top Level Component
// This will also change the render call for the App
var RecentChangesTable = React.createClass ({
  render: function(){
    return <table className="table">
              {this.props.children}
            </table>;
  }
});
RecentChangesTable.Title = React.createClass({
  render: function() {
    return (<h1>{this.props.title}</h1>);
  }
});
RecentChangesTable.Heading = React.createClass({
  render: function() {
    // assumption that heading will receive this as a prop
    return (<th key={this.props.index}>{this.props.heading}</th>);
  }
});

RecentChangesTable.Row = React.createClass ({
  render: function() {
    // The Row will receive a changeSet object in its props
    return (<tr key = {this.props.index}>
              <td>{this.props.changeSet.when}</td>
              <td>{this.props.changeSet.who}</td>
              <td>{this.props.changeSet.description}</td>
            </tr>
            );
  }
});
// Headings will get a list of titles passed to it.
RecentChangesTable.Headings = React.createClass({
  render: function(){
    var headings = this.props.headings.map(function(heading, index) {
      return (<RecentChangesTable.Heading heading = {heading} key = {index}/>);
    });

    return (<thead><tr>{headings}</tr></thead>);
  }
});

RecentChangesTable.Rows = React.createClass ({
  render: function() {
    var rows = this.props.changeSets.map(function(changeSet, index){
      return (<RecentChangesTable.Row changeSet = {changeSet} key = {index} />);
    })
    return (<tbody>{rows}</tbody>);
  } 
});

var App = React.createClass({
  render: function() {
      // Of important note - until React 16 - you can only return one node!!!
      return (
        <div>
          <RecentChangesTable.Title title = {this.props.title} />
          <RecentChangesTable>
              
                  <RecentChangesTable.Headings headings = {this.props.headings} />
                  <RecentChangesTable.Rows changeSets = {this.props.changeSets} />
          
          </RecentChangesTable>
        </div>
      )
  }
})

ReactDOM.render(<App {...props} />,  document.getElementById('App'))