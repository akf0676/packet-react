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
                ]
            }
        );
    },

    _renderBook(book) {
        return (
            <div class="checkbox">
                <label for="{book.name}">
                    <input type="checkbox" /> {book.name} -- {book.author}
                </label>
            </div>
        );
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
    render() {
        switch (this.state.currentStep) {
            case 1:
                return <BookList />;
            case 2:
                return <ShippingDetails />;
            case 3: 
                return <DeliveryDetails />;
        }
    }
});