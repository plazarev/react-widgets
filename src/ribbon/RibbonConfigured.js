
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ribbon as RibbonDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.css";
import "@mdi/font/css/materialdesignicons.min.css";

class RibbonConfigured extends Component {
  componentDidMount() {
    this.ribbon = new RibbonDHX(this.el, {
			css: "dhx_widget--bordered",
    });
    this.ribbon.data.load('./static/ribbon.json')
  }
  componentWillUnmount() {
    this.ribbon.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
}
RibbonConfigured.propTypes = {
  css: PropTypes.string,
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ])
};

export default RibbonConfigured;