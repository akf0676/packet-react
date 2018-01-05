var App = React.createClass({
    render : function() {
      return(React.createElement("div" , null , "Welcome"));
    }
});

React.render(React.createElement(App), document.body);