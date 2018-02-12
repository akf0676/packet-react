/*
	A mixin is nothing other than a object being declared
*/
var SetIntervalMixin = {
	/*
		Adding a way to track our interval handler.
		Intializing an array to hold instances to intervals that we will be creating
	*/
	componentWillMount: function() {
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
	componentWillUnmount: function() {
		this.intervals.map(clearInterval);
	}
};
module.exports = SetIntervalMixin;
