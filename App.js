var App = React.createClass({
  render: function() {
      // Headings data passed to Render Function from the ReactDOM.render props
      var headings = this.props.headings.map(function(heading){
          return <th>{heading}</th>
      });
      // Loop through Data passed to Render Function from the ReactDOM.render props
      var rows = this.props.data.map(function(row){
          return  <tr>
                      <td>{row.when}</td>
                      <td>{row.who}</td>
                      <td>{row.description}</td>
                  </tr>
      });
    
      // Of important note - until React 16 - you can only return one node!!!
      return (
          <div>
              <h1>{title}</h1>
              <table>
                  <thead>
                      <tr>
                          {headings}
                      </tr>
                  </thead>
                  <tbody>
                      {rows}
                  </tbody>
              </table>
          </div>
      )
  }
})

ReactDOM.render(<App title={title} headings = {headings} data = {data}/>,  document.querySelector('#App'))