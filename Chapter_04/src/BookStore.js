//@ts-check
import React from 'react';

var BookStore = React.createClass({
    render() {
        switch (step) {
            case 1:
                return <BookList />;
            case 2:
                return <ShippingDetails />;
            case 3: 
                return <DeliveryDetails />;
        }
    }
});