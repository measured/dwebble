/** @jsx React.DOM */

var Reflux = require("reflux");
Reflux.nextTick(process.nextTick);

var React = require("react");

// Basic styling
require("./Style.scss");

// render top-level react component
var Example = require("./modules/component-Example");
var Application = React.createClass({
	render: function() {
		return <Example text='some text for my prop' />;
	}
});
module.exports = Application;
