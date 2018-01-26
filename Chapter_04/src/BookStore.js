//@ts-check
import React from 'react';

var BookList = React.createClass({
    getInitialState() {
        return (
            {   books: [
                    { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
                    { id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
                    { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
                ],
                selectedBooks: [],
                error: false
            }
        );
    },
    
    _renderBook(book) {
        return (
            <div className="checkbox" key={book.id}>
                <label htmlFor="{book.name}" >
                    <input type="checkbox" value={book.name}
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
            currentStep: 1,
            formValues : {}
        });
    },
    updateFormData(formData) {
        // ES6 method—Object.assign. Used to copy the values of all the enumerable properties from one or more source objects to a target object
        var formValues = Object.assign({}, this.state.formValues, formData);
        var nextStep = this.currentStep + 1;
        this.setState({currentStep: nextStep, formValues : formValues});
        console.log(formValues);
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

module.exports = BookStore;