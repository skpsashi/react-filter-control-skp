import React, { useState } from "react";
import PropTypes from "prop-types";
import Consumer from "../../context";

const DropDownMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index) => {
    const { menuItems, keyField, onMenuItemClick } = props;
    const selected = menuItems[index];
    onMenuItemClick(keyField ? selected[keyField] : selected);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderButton = (children) => {
    return React.Children.map(children, (child) =>
      React.cloneElement(child, {
        onClick: handleButtonClick,
      })
    );
  };

  const { activeIndex, color, menuItems, textField, keyField, children } =
    props;

  return (
    <span className="fc-dropdownmenu">
      {children ? (
        renderButton(children)
      ) : (
        <Consumer>
          {(value) => (
            <value.Button
              text={
                textField
                  ? menuItems[activeIndex][textField]
                  : menuItems[activeIndex]
              }
              color={color}
              onClick={handleButtonClick}
            />
          )}
        </Consumer>
      )}
      <Consumer>
        {(value) => (
          <value.Menu
            handleMenuItemClick={handleMenuItemClick}
            handleClose={handleClose}
            visible={anchorEl != null}
            menuItems={menuItems}
            textField={textField}
            keyField={keyField}
            activeIndex={activeIndex}
          />
        )}
      </Consumer>
    </span>
  );
};

DropDownMenu.propTypes = {
  activeIndex: PropTypes.number,
  color: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  textField: PropTypes.string,
  keyField: PropTypes.string,
  children: PropTypes.node,
};

DropDownMenu.defaultProps = {
  activeIndex: 0,
  color: "",
  textField: "",
  keyField: "",
  children: undefined,
};

export default DropDownMenu;
