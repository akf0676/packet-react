import React from 'react';

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
                <h1>Confirmation</h1>
				<h2>Please confirm you details are correct</h2>
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

module.exports = ConfirmationDetails;
