import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const useOutsideClick = (ref, clickHandler) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickHandler()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, clickHandler]);
};

const Dropdown = ({
  placeholder,
  options,
  className,
  value,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const getSelectedOption = () => options.find(({
    value: optionValue
  }) => optionValue === value)
  const [selected, setSelected] = useState(getSelectedOption());
  const dropDownRef = useRef(null);
  const close = () => {
    setIsOpen(false);
  }
  useOutsideClick(dropDownRef, close);

  const toggleShow = () => {
    setIsOpen(!isOpen);
  }

  const selecthandler = (selected) => {
    setSelected(selected);
    onSelect(selected);
    close();
  }

  return <div className="dropdown" ref={dropDownRef}>
    <span onClick={toggleShow} className={classnames("btn ps-0 dropdown-toggle", className)}>
      {selected?.label || placeholder}
    </span>
    <ul className={classnames("dropdown-menu", {
      show: isOpen,
    })}>
      {options.map(({ label, value }) => <li key={value}>
        <button
          onClick={() => selecthandler({ label, value })}
          className="dropdown-item">
          {label}
        </button>
      </li>)}
    </ul>
  </div>
};

export default Dropdown;

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Dropdown.defaultProps = {
  placeholder: 'Select',
  options: [],
  onSelect: () => {}
}
