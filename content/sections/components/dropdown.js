import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const options = ['Mountain', 'Forest', 'Ocean', 'Desert'];

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700&display=swap"
                rel="stylesheet"
            ></link>
            <Container>
                <DropdownContainer ref={dropdownRef}>
                    <DropdownToggle
                        onClick={handleToggleDropdown}
                        tabIndex="0" // Make the component focusable
                        isOpen={isOpen} // Pass isOpen as a prop
                    >
                        {selectedOption || 'Dropdown'}
                        <ArrowIcon className="arrow-icon" />
                    </DropdownToggle>
                    {isOpen && (
                        <DropdownMenu>
                            {options.map((option) => (
                                <DropdownMenuItem
                                    key={option}
                                    onClick={() => handleSelectOption(option)}
                                >
                                    {option}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenu>
                    )}
                </DropdownContainer>
            </Container>
        </div>
    );
};

export default Dropdown;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownContainer = styled.div`
  position: relative;
  color: #484848;
  font-weight: 500;
  background-color: #FFFFFF;
  border-radius: 7px;
  margin-right: 15px;

`;

const DropdownToggle = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => (props.isOpen ? '#5287E8' : '#DDDDDD')};
  border-radius: 7px;
  padding: 10px;
  width: 225px;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  &:hover {
    border-color: #5287E8;
  }
  &:focus {
    border-color: #5287E8;
    color: #A8A8A8; /* Change the text color when the dropdown is active */
    > .arrow-icon {
      border-top-color: #A8A8A8; /* Change the arrow icon color when the dropdown is active */
    }
  }
  font-family: 'Lexend', sans-serif; /* Apply Lexend font */
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #DDDDDD;
  border-radius: 7px;
  background-color: #ffffff;
  color: black !important;
  width: 100%;
  font-family: 'Lexend';
  font-weight: 400;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 7px;
  cursor: pointer;
  &:hover {
    background-color: #E1E8F8;
    font-weight: 500;
    border-radius: 7px;
    margin: 7px;
  }
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  margin: auto 0 auto 10px;
`;
