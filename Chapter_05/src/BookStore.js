import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './booklist';
import ShippingDetails from './shippingdetails';
import DeliveryDetails from './deliverydetails';
import Confirmation from './confirmation';
import OrderCompletion from './ordercompletion';
import ModalAlertTimeout from './ModalAlertTimeout';

var BookStore = React.createClass({
    getInitialState() {
        return ({
            currentStep: 1,
			formValues : {},
			cartTimeout: 5
        });
	},
	updateCartTimeout(timeout){
		this.setState({cartTimeout: timeout});
	},
    updateFormData(formData) {
        // ES6 method—Object.assign. Used to copy the values of all the enumerable properties from one or more source objects to a target object
        var formValues = Object.assign({}, this.state.formValues, formData);
        var nextStep = this.state.currentStep + 1;
        this.setState({currentStep: nextStep, formValues : formValues});
	},
	alertCartTimeout() {
		console.log("BookStrore alertCartTimeout");
		ReactDOM.render(<ModalAlertTimeout />, document.getElementById('modalAlertTimeout'))
		this.setState({currentStep: 1, formValues:{}, cartTimeout: 1});
	},
    render() {
        switch (this.state.currentStep) {
            case 1:
                return <BookList updateFormData={this.updateFormData} />;
            case 2:
                return <ShippingDetails updateFormData={this.updateFormData}
										cartTimeout={this.state.cartTimeout}
										updateCartTimeout={this.updateCartTimeout}
										alertCartTimeout={this.alertCartTimeout} />;
            case 3:
                return <DeliveryDetails updateFormData={this.updateFormData}
										cartTimeout={this.state.cartTimeout}
										updateCartTimeout={this.updateCartTimeout}
										alertCartTimeout={this.alertCartTimeout} />;
            case 4:
                return <Confirmation data={this.state.formValues}
											updateFormData={this.updateFormData}
											cartTimeout={this.state.cartTimeout}
											alertCartTimeout={this.alertCartTimeout} />
            case 5:
				return <OrderCompletion data={this.state.formValues}
										cartTimeout={this.state.cartTimeout}
										alertCartTimeout={this.alertCartTimeout} />
			case 10:
				// Handele the case of cart timeout
				return <div><h2>Sorry, your cart has expired</h2><p>Please try again</p></div>;
			default:
                return <BookList updateFormData={this.updateFormData} />;
        }
    }
});

module.exports = BookStore;
