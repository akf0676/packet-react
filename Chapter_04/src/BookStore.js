//@ts-check
import React from 'react';

var BookList = React.createClass({
    render() {
        return(
            <h1>
                Choose from a wider variety of books availble in our Store.
            </h1>
        );
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