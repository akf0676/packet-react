//@ts-check
import React from 'react';
import BookList from './booklist';
import ShippingDetails from './shippingdetails';
import DeliveryDetails from './deliverydetails';
import ConfirmationDetails from './confirmation';
import OrderCompletion from './ordercompletion';


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




/*
	A mixin is nothing other than a object being declared
*/
var setIntervalMixin = {
	/*
		Adding a way to track our interval handler.
		Intializing an array to hold instances to intervals that we will be creating
	*/
	componetWillMount: function() {
		this.intervals =[];
	},

	// Method used to define new intervals
	setInterval: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	/*
		 Although not a react component - componentWillMount & componentWillUnmount are react lifecycle method names
		 componentWillUnmount is used to clean up the intervals which might have been created before we unmount the component
		 When we start using, they are called just like other methonds in our component life cycle
		 Both these and the existing methods will be called
	*/
	componetWillUnmount: function() {
		this.intervals.map(clearInterval);
	}
};
/*
	Cart Timout Mixin
Mixin used to  store cartTimeout values and updating them.
a method to decrement the cart timer,
something that will keep updating the state. Next,
we will need to actually set the timeout,
to call the method at an interval so that it is called every second to decrement the time?
*/
var CartTimeoutMixin = {
	componetWillMount: function() {
		this.setInterval(this.decrementCartTimer, 1000);
	},
	decrementCartTimer() {
		if (this.state.cartTimeout == 0) {
			/// This will be defined on the parent componetn and pass it around to be called from a child component
			this.props.alertCartTimeout();
			return;
		}
		this.setState({cartTimeout: this.state.cartTimeout -1 });
	},
	/*
		 Need to pass the info back to our parent component
		 Rather than add to each component we can use the Mixins Unmount method
	*/
	componetWillUnmount: function() {
		this.props.updateCartTimeout(this.state.cartTimeout);
	}
};

module.exports = BookStore;
