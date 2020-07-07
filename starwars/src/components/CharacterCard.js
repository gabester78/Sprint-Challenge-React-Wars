import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CharacterCard = ({ name, hair, dob, home }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="bg-info w-50 p-3 mb-5" caret>
        <h1>{name}</h1>
      </DropdownToggle>
      <DropdownMenu className="bg-dark text-light w-50 p-3">
        <DropdownItem className="text-light">
          <h4>Hair color: {hair}</h4>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="text-light">
          <h4>Date of birth: {dob}</h4>
        </DropdownItem>
        {/* <DropdownItem divider />
        <DropdownItem className="text-light">
          <h4>Homeworld: {home} </h4>
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CharacterCard;
