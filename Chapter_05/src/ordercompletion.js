import React from 'react';

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
				<h1>Order Completion</h1>
                <h2> Thanks {oc.fullName} for Placing your Order</h2>
                <p>Your order of {oc.selectedBooks.join(", ")} will be sent to you at <br />
                {oc.shippingAddress} with you in {numberOfDays}</p>
            </div>
        );
    }
});

module.exports = OrderCompletion;
