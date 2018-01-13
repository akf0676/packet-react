// Chapter 03 - Utlise this.props.children
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
    var headingStyle = {
      backgroundColor: 'FloralWhite',
      fontSize: '19px'
    };
    return (<th key={this.props.index} style={headingStyle}>{this.props.heading}</th>);
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
      return (<RecentChangesTable.Heading heading = {heading} key = {'heading-' + index}/>);
    });

    return (<thead><tr className='table-th'>{headings}</tr></thead>);
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
  // Chapter 03 - Get Initial State
  getInitialState: function() {
    return {
      changeSets: []
    };
  },
  
  propTypes: {
    headings: function(props, propName, componentName) {
      if(propName === 'headings')
        return Error('Failed Heading Validation');
    },
    changeSets: React.PropTypes.array,
    changeSets: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {
      headings: ['Time Changed ', 'Who did it', 'What they changed']
    };
  },
  // Chapter 03 - Get Data
  componentDidMount: function(){
    //Perfrom AJAC call to fetch new data
    //console.log("get ajax request");
    $.ajax ({
      url: 'http://openlibrary.org/recentchanges.json?limit=10',
      context: this,
      dataType: 'json',
      type: 'GET'
    }).done(function (data) {
      var changeSets = this.mapOpenLibraryDataToChangeSet(data);
      this.setState({changeSets: changeSets});
    });
  },
  // Format OpenLibrary JSON feed
  mapOpenLibraryDataToChangeSet : function(data) {
    // console.log("format response");
    return data.map(function(change, index) {
      return {
        "when": jQuery.timeago(change.timestamp),
        "who": change.author.key,
        "description": change.comment
      }
    });
  },

  render: function() {
    // Of important note - until React 16 - you can only return one node!!!
      return (
        <div>
          <RecentChangesTable.Title title = {this.props.title} />
          <RecentChangesTable>
              
                  <RecentChangesTable.Headings headings = {this.props.headings} />
                  <RecentChangesTable.Rows changeSets = {this.state.changeSets} />
          
          </RecentChangesTable>
        </div>
      )
  }
})

ReactDOM.render(<App {...props} />,  document.getElementById('App'))