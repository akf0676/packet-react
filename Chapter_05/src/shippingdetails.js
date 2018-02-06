import React from 'react';
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

module.exports = ShippingDetails;
