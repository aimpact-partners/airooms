import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Drawer = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (handler) => {
    if (typeof handler === "function") {
      handler();
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={"drawer"}>
        <div className="drawer-icon" onClick={toggleDrawer}>
          <Icon icon={"ic:baseline-menu"} width={25} />
        </div>
        <span className={`drawer-options ${isOpen ? "open" : ""}`}>
          {options.map((option, index) => (
            <div key={index} className="drawer-option" onClick={() => handleOptionClick(option.handler)}>
              <Icon icon={option.icon} width={25} />
              <span className="drawer-option-label">{option.label}</span>
            </div>
          ))}
        </span>
      </div>
    </>
  );
};

export default Drawer;
