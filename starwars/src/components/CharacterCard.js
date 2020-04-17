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
      <DropdownToggle className="bg-info w-25 p-3" caret>
        <h1>Luke</h1>
      </DropdownToggle>
      <DropdownMenu className="bg-dark text-light w-25 p-3">
        <DropdownItem className="text-light">
          <h4>Hair color: Hair</h4>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-light">
          <h4>Date of birth: Hair</h4>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-light">
          <h4>Homeworld: hair</h4>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CharacterCard;
