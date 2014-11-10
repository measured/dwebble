/**
 * @jsx React.DOM
 */

var React = require('react')

var Example = React.createClass({
  render: function() {
    return (
      <div>
        <h2>A basic component</h2>
        <p>{this.props.text}</p>
      </div>
    )
  },
})

module.exports = Example
