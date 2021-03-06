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
var ShippingDetails = React.createClass({
    getInitialState() {
        return (
            { fullName: '', shippingAddress: '', contactNumber: '', error: false}
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
    _validateInput() {
        if (this.state.fullName === '') {
            this.setState({error: "Please enter full name"});
          } else if (this.state.contactNumber === '') {
            this.setState({error: "Please enter contact number"});
          } else if (this.state.shippingAddress === '') {
            this.setState({error: "Please enter shipping address"});
          } else {
            this.setState({error: false});
            return true;
          }        
    },
    handleSubmit(event) {
        event.preventDefault();
        // Grab all form Data
        var formData = {
            fullName: this.state.fullName,
            contactNumber: this.state.contactNumber,
            shippingAddress: this.state.shippingAddress
        }
        // Passing this state to the updateFormData function of the parent component in the end.
        if (this._validateInput()) {
            this.props.updateFormData(formData);
        }
        console.log("Shipping Details Submitted");
    },
    handleChange(event, attribute) {
        // this method ensures state is updated as user interacts with the input fields
        var newState = this.state;
        newState[attribute] = event.target.value;
        this.setState(newState);
        console.log(this.state);
    },
    render() {
        var errorMessage = this._renderError();

        return(
            <div>
                <h1>
                    Enter your Shipping Information
                </h1>
                {errorMessage}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control"
                            type="text"
                            placeholder="Full Name"
                            /* 
                                - assigning the value prop of the input  elds to it's corresponding state
                                - ensure  that the UI re ects the latest state, based on the user interaction
                            */
                            value={this.state.fullName}
                            /*
                                - using a onChange handler in the state of the component
                                - 
                            */
                            onChange = {
                                (event) => this.handleChange(event, 'fullName')
                            } />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="text"
                            placeholder="Shipping Address"
                            value={this.state.shippingAddress}
                            onChange = {
                                (event) => this.handleChange(event, 'shippingAddress')
                            } />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="text"
                            placeholder="Contact Number" 
                            value={this.state.contactNumber}
                            onChange = {
                                (event) => this.handleChange(event, 'contactNumber')
                            } />
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            ref="submit"
                            className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        );
    }
});
var DeliveryDetails = React.createClass({
    getInitialState() {
        return (
            { deliveryOption: "Primary"}
        );
    },
    handleSubmit(event) {
        event.preventDefault();
        // Update props to parent COmponent
        this.props.updateFormData(this.state);
        console.log
        console.log("Submit delivery options");
    },
    handleChange(event) {
        this.setState({deliveryOption: event.target.value});
        console.log(this.state);
    },
    render() {
        return(
            <div>
                <h1>
                    Choose your delivery options here
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-inpt"
                                checked={this.state.deliveryOption === "Primary"}
                                value="Primary"
                                onChange={this.handleChange}
                                />
                                Prime Delivery - 2 - 3 Days
                        </label>
                    </div>
                    <div className="form-check">
                        <input type="radio"  className="form-check-inpt"
                                checked={this.state.deliveryOption === "Standard"}
                                value="Standard"
                                onChange={this.handleChange}
                                />
                                Standard - 5 - 7 Days
                    </div>
                    <button type="submit"
                        ref="submit"
                        className="btn btn-success">
                        Confirm Delivery Options
                    </button>
                </form>
            </div>
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
        console.log("updateFormData this.currentStep = " + this.state.currentStep);
        var nextStep = this.state.currentStep + 1;
        this.setState({currentStep: nextStep, formValues : formValues});
        console.log("updateFormData nextStep = " + nextStep);
    }, 
    render() {
        console.log("BookStore Rnder State of current step = " + this.state.currentStep);
        switch (this.state.currentStep) {
            case 1:
                return <BookList updateFormData={this.updateFormData} />;
            case 2:
                return <ShippingDetails updateFormData={this.updateFormData}/>;
            case 3: 
                return <DeliveryDetails updateFormData={this.updateFormData}/>;
            case 4:
                return <ConfirmationDetails 
                            data={this.state.formValues} updateFormData={this.updateFormData} />
            case 5:
                return <OrderCompletion data={this.state.formValues} />
            default:
                return <BookList updateFormData={this.updateFormData} />;
        }
    }
});

var ConfirmationDetails = React.createClass ({
    handleSubmit(event) {
        event.preventDefault();
        //need to update ParentComponent
        this.props.updateFormData(this.props.data);
        
        console.log("Confirmation Details Submission complete");
    },
    render() {
        return( 
            <div>
                <h1>Please confirm you details are correct</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <strong>Full Name</strong> : { this.props.data.fullName }
                    </div>
                    <div>
                        <strong>Delivery Address</strong> : { this.props.data.shippingAddress }
                    </div>
                    <div>
                        <strong>Delivery Options</strong> : { this.props.data.deliveryOption }
                    </div>
                    <div>
                        <strong>Your Book Selection</strong> : { this.props.data.selectedBooks.join(", ") }
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            ref="submit"
                            className="btn btn-success">
                            Confirm Details are all correct
                        </button>
                    </div>
                </form>
            </div>
        );
    }
});

var OrderCompletion = React.createClass({
    render() {
        console.log(this.props.data)
        var oc = this.props.data
        var numberOfDays = "3 to 4 days";
        if(oc.deliveryOption === "Standard") {
            numberOfDays = "5 - 7 days";
        }
        return (
            <div>
                <h1> Thanks {oc.fullName} for Placing your Order</h1>
                <p>Your order of {oc.selectedBooks.join(", ")} will be sent to you at <br />
                {oc.shippingAddress} with you in {numberOfDays}</p>
            </div>
        );
    }
});

module.exports = BookStore;