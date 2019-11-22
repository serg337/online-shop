import React, { Component } from "react";
import MenuItem from "../components/MenuItem";
import SECTIONS_DATA from "../data/sections.data";

class DirectoryMenu extends Component {
  state = {
    sections: SECTIONS_DATA
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
