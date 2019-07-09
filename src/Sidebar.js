import React, { PureComponent } from 'react'
import { Sidebar as SidebarDHX } from 'dhx-suite'
import {
  withRouter
} from 'react-router-dom'

 class Sidebar extends PureComponent {
	componentDidMount() {
		this.sidebar = new SidebarDHX(this.el, {
			css: 'dhx_widget--border_right',
      data: [
				{
					id: "logo",
					type: 'customButton', 
					css: 'logo-button',
					html: '<img src="/static/logo_r.svg" alt="DHTMLX - React"/>',
					group: "navIgate",
					twoState: true
				},
				{
					type: 'separator',
				},
				{
					value: 'Calendar',
					id: 'calendar-link',
					group: "navIgate",
					twoState: true
				},
				{
					value: 'Timepicker',
					id: 'timepicker-link',
					group: "navIgate",
					twoState: true
				}
			]
		});
		const activeWidget = window.location.pathname.slice(1)
		if (activeWidget) {
			this.props.handleActiveWidgetChange(activeWidget)
			this.sidebar.data.update(activeWidget + "-link", {active: true})
		}

		this.sidebar.events.on('click', (id) => {
			if (id !== 'logo') {
				const widgetName = id.split('-')[0]
				this.props.history.push('/' + widgetName)
				this.props.handleActiveWidgetChange(widgetName)
				if (activeWidget) {
					this.sidebar.data.update(activeWidget + "-link", {active: false})
				}
				this.sidebar.data.update(widgetName + "-link", {active: true})
			} else {
				this.props.history.push('/')
				this.props.handleActiveWidgetChange("")
				if (activeWidget) {
					this.sidebar.data.update(activeWidget + "-link", {active: false})
				}
			}
		})
	}
	componentWillUnmount() {
    this.sidebar.destructor();
  }
	render() {
		return (
			<div style={{maxHeight: "100%"}} ref={el => this.el = el}>
				
			</div>
		)
	}
}
export default withRouter(Sidebar)