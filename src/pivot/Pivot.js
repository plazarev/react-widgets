
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pivot as PivotDHX, css } from "dhx-pivot";
import "dhx-pivot/codebase/pivot.min.css";
import dataset from "./dataset"

class Pivot extends Component {
  componentDidMount() {
    if (!window.dhx || !window.dhx.css) {
      window.dhx = {}
      window.dhx.css = css
    }
        
    this.pivot = new PivotDHX(this.el, {
        data: dataset,
				fields: {
					rows: ["form", "name"],
					columns: ["year"],
					values: [{ id: "oil", method: "count" }, { id: "oil", method: "sum" }],
				},
				fieldList: [
					{ id: "name", label: "Name" },
					{ id: "year", label: "Year" },
					{ id: "continent", label: "Continent" },
					{ id: "form", label: "Form" },
					{ id: "gdp", label: "GDP" },
					{ id: "oil", label: "Oil" },
					{ id: "balance", label: "Balance" },
					{ id: "when", label: "When", type: "date", format: "%d/%m/%Y" }
				]
    });
  }
  componentWillUnmount() {
    this.pivot.destructor();
  }
  render() {
    return (
      <div ref={el => this.el = el} style={{textAlign: 'left', minHeight: '800px',  width: 1000, marginLeft: 'auto', marginRight: 'auto'}}></div>
    );
  }
}
Pivot.propTypes = {
  data: PropTypes.array,
  fields: PropTypes.array,
  fieldList: PropTypes.array,
};

export default Pivot;
