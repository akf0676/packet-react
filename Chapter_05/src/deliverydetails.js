import React from 'react';
import SetIntervalMixin from './mixins/set_interval_mixin';
import CartTimeoutMixin from './mixins/cart_timeout';

var DeliveryDetails = React.createClass({
    getInitialState() {
        return (
			{  deliveryOption: "Primary",
				cartTimeout: this.props.cartTimeout
			}
		);

	},
	// First place where we need to use the timeout
	mixins: [SetIntervalMixin, CartTimeoutMixin],

    handleSubmit(event) {
        event.preventDefault();
        // Update props to parent COmponent
        this.props.updateFormData(this.state);

        console.log("Submit delivery options");
    },
    handleChange(event) {
        this.setState({deliveryOption: event.target.value});
        console.log(this.state);
    },
    render() {
		console.log("Cart Timeout " + this.state.cartTimeout);
		var minutes = Math.floor(this.state.cartTimeout/60);
		var seconds = this.state.cartTimeout - minutes * 60;
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
				<div className="well">
					<span className="glyphicon glyphicon-time" aria-hidden="true"></span>
					You have {minutes} Minutes, {seconds} Seconds, before confirming order
				</div>
            </div>
        );
    }
});

module.exports = DeliveryDetails;
