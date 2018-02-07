/*
	Cart Timout Mixin
Mixin used to  store cartTimeout values and updating them.
a method to decrement the cart timer,
something that will keep updating the state. Next,
we will need to actually set the timeout,
to call the method at an interval so that it is called every second to decrement the time?
*/
var CartTimeoutMixin = {
	componentWillMount: function() {
		this.setInterval(this.decrementCartTimer, 1000);
	},
	decrementCartTimer() {
		if (this.state.cartTimeout == 0) {
			/// This will be defined on the parent componetn and pass it around to be called from a child component
			this.props.alertCartTimeout();
			return;
		}
		this.setState({cartTimeout: this.state.cartTimeout - 1 });
	},
	/*
		 Need to pass the info back to our parent component
		 Rather than add to each component we can use the Mixins Unmount method
	*/
	componentWillUnmount(){
		this.props.updateCartTimeout(this.state.cartTimeout);
	}
};

module.exports = CartTimeoutMixin;
