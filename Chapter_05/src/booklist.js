import React from 'react';

var BookList = React.createClass({
    getInitialState() {
        return (
            {   books: [
                    { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
                    { id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
					{ id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' },
					{ id: 4, name: 'Legs of Fire', author: 'Fast Kalam' }
                ],
				selectedBooks: [],
                error: false
            }
        );
    },

    _renderBook(book) {
        return (
            <div className="checkbox" key={book.id}>
                <label htmlFor={book.id} >
                    <input type="checkbox" value={book.name} id={book.id}
                        onChange={this.handleSelectedBooks} />
                    {book.name} -- {book.author}
                </label>
            </div>
        );
    },

    _renderError() {
        if (this.state.error){
            return(
                <div className="alert alert-danger">
                    {this.state.error}
                </div>
            );
        }
    },

    handleSelectedBooks(event) {
        var selectedBooks = this.state.selectedBooks;
        var index = selectedBooks.indexOf(event.target.value);

        if (event.target.checked) {
            if (index === -1)
                selectedBooks.push(event.target.value);
        } else {
            selectedBooks.splice(index, 1);
        }

        this.setState({selectedBooks : selectedBooks});
        console.log(selectedBooks)
    },
    // Handling submitting the form - React provides an onSubmit event
    handleSubmit(event) {
        event.preventDefault();
        // Error Checking - check at least one  book is selected
        if(this.state.selectedBooks.length === 0 ){
            this.setState({
                error : 'Please choose at least on book to continue'
            });
        } else {
            this.setState({ error: false});
            this.props.updateFormData(
                {selectedBooks: this.state.selectedBooks }
            );
        }        console.log("Form submitted");
    },

    render() {
        var errorMessage = this._renderError();

        return(
            <div>
                <h1>
                    Choose from a wide variety of books availble in our Store.
                </h1>
                {errorMessage}
                <form onSubmit={this.handleSubmit}>
                    {/*
                        This is fat arrow syntax to define functions
                        This is an ES6 feature - a shorthand for writing functions
                        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
                    */}
                    {this.state.books.map((book) => {
                        return this._renderBook(book); })
                    }

                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        );
    },
});

module.exports = BookList;
