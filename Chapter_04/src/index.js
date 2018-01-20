//@ts-check
import ReactDOM from 'react-dom';
import BookStore from './BookStore';


var InputExample = React.createClass({
    render() {
        return (
            <input type="text" value="Andy" />
        );
    }
});
ReactDOM.render(<BookStore />, document.getElementById('root'));