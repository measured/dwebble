
// Basic styling
require("./Style.scss")

var Reflux = require("reflux")
Reflux.nextTick(process.nextTick)

var React = require("react")
var Router = require("react-router")

// render top-level react component
var Example = require("./modules/component-Example")

var Application = React.createClass({
	render: function() {
		return <Example text='some text for my prop' />
	}
});

var routes = (
  <Router.Route name="app" path="/" handler={Application} />
);

Router.run(routes, function (Application) {
  React.render(<Application />, document.body);
});
