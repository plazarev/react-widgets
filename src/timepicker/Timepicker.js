
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Timepicker as TimepickerDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Timepicker extends Component {
  componentDidMount() {
    this.timepicker = new TimepickerDHX(this.el, {
      css: "dhx_widget--bordered",
    });
  }
  componentWillUnmount() {
    this.timepicker.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
Timepicker.propTypes = {
  css: PropTypes.string,
	timeFormat: PropTypes.oneOf([12, 24]),
	actions: PropTypes.bool,
};

export default Timepicker;
