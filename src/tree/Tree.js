
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Tree extends Component {
  componentDidMount() {
    this.tree = new TreeDHX(this.el, {
      css: "dhx_widget--bg_white",
    });
    this.tree.data.load(`${process.env.PUBLIC_URL}/static/tree.json`)
  }
  componentWillUnmount() {
    this.tree.destructor();
  }
  render() {
    return (
      <div style={{minWidth: 270, padding: 10, background: '#fff'}} ref={el => this.el = el}></div>
    );
  }
}
Tree.propTypes = {
  data: PropTypes.instanceOf([
    PropTypes.array,
    PropTypes.instanceOf(TreeCollection)
  ]),
	css: PropTypes.string,
	keyNavigation: PropTypes.bool,
	autoload: PropTypes.string,
	checkbox: PropTypes.bool,
	isFolder: PropTypes.func,
};

export default Tree;
