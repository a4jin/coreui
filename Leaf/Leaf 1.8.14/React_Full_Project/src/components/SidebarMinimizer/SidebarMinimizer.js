import React, {Component} from 'react';

class SidebarMinimizer extends Component {

  sidebarMinimize() {
    document.body.classList.toggle('sidebar-minimized');
  }

  brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  }

  render() {
    return null
    // Uncomment following code lines to add Sidebar Header
    // return (
    //   <button className="sidebar-minimizer" type="button" onClick={(event) => { this.sidebarMinimize(); this.brandMinimize() }}></button>
    // )
  }
}

export default SidebarMinimizer;
