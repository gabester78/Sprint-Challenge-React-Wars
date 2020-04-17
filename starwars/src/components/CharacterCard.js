import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CharacterCard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <h1>Luke</h1>
      </DropdownToggle>
      <DropdownMenu>
        <h3>Hair</h3>
        <DropdownItem divider />
        <DropdownItem>DOB</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Home World</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CharacterCard;
