//@ts-check
import React from 'react';

var BookList = React.createClass({
    getIntialState() {
        return (
            {
                books: [
                    { name: 'Zero to One', author: 'Peter Thiel' },
                    { name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
                    { name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
                ],
                selectedBooks: []
            }
        );
    },

    _renderBook(book) {
        return (
            <div className="checkbox">
                <label htmlFor="{book.name}">
                    <input type="checkbox" 
                        value={book.name}
                        onChange={this.handleSelectedBooks} /> 
                    {book.name} -- {book.author}
                </label>
            </div>
        );
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
    },
    render() {
        return(
            <div>
                <h1>
                    Choose from a wide variety of books availble in our Store.
                </h1>
                <form>
                    {/* 
                        This is fat arrow syntax to define functions
                        This is an ES6 feature - a shorthand for writing functions
                        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
                    */} 
                    {this.state.books.map((book) => {
                        return this._renderBook(book);
                    })}
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        );
    },
    // Handling submitting the form - React provides an onSubmit event 
    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        console.log("Form submitted");
    }
});
var ShippingDetails = React.createClass({
    render() {
        return(
            <h1>
                Enter your Shipping Information
            </h1>
        );
    }
});
var DeliveryDetails = React.createClass({
    render() {
        return(
            <h1>
                Choose your delivery options here
            </h1>
        );
    }
});

var BookStore = React.createClass({
    getInitialState() {
        return ({
            currentStep: 1
        });
    },
    updateFormData(formData) {
        console.log(formData);
    }, 
    render() {
        switch (this.state.currentStep) {
            case 1:
                return <BookList 
                            updateFormData={this.updateFormData} />;
            case 2:
                return <ShippingDetails 
                            updateFormData={this.updateFormData}/>;
            case 3: 
                return <DeliveryDetails 
                            updateFormData={this.updateFormData}/>;
        }
    }
});