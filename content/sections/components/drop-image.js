import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Desert from '../../images/desert.png';
import Ocean from '../../images/sea.png';
import Forest from '../../images/trees.png';
import Mountain from '../../images/Mountains.png';

const options = [
    { label: 'Mountain', imageSrc: Mountain },
    { label: 'Forest', imageSrc: Forest },
    { label: 'Ocean', imageSrc: Ocean },
    { label: 'Desert', imageSrc: Desert }
];

const DropdownImg = () => {
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
        <Container>
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700&display=swap"
                rel="stylesheet"
            ></link>

            <DropdownContainer ref={dropdownRef}>
                <DropdownToggle
                    onClick={handleToggleDropdown}
                    tabIndex="0" 
                    isOpen={isOpen} 
                >
                    {selectedOption ? selectedOption.label : 'Dropdown'}
                    <ArrowIcon className="arrow-icon" />
                </DropdownToggle>
                {isOpen && (
                    <DropdownMenu>
                        {options.map((option) => (
                            <DropdownMenuItem
                                key={option.label}
                                onClick={() => handleSelectOption(option)}
                            >
                                {option.label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenu>
                )}
            </DropdownContainer>
            {selectedOption && (
                <ImageContainer>
                    <Image src={selectedOption.imageSrc} alt={selectedOption.label} />
                </ImageContainer>
            )}
        </Container>
    );
};

export default DropdownImg;

const Container = styled.div`
  display: flex;
  align-items: center;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  color: #484848;
  font-weight: 500;
  background-color: #FFFFFF;
  border-radius: 7px;
  margin-right: 15px;

    @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }

`;

const DropdownToggle = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => (props.isOpen ? '#5287E8' : '#DDDDDD')};
  border-radius: 7px;
  padding: 10px;
  width: 225px;
  display: flex;
  justify-content: space-between;
  &:hover {
    border-color: #5287E8;
  }
  &:focus {
    border-color: #5287E8;
    color: #A8A8A8; 
    > .arrow-icon {
      border-top-color: #A8A8A8; 
    }
  }
  font-family: 'Lexend', sans-serif; 

    @media (max-width: 768px) {
    width: 100%; 
  }
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

const ImageContainer = styled.div`
  width: 500px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px; 
  border-radius: 2%;
  overflow: hidden;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    width: 100%; 
    margin: 20px auto; 
  }
`;


const Image = styled.img`
  width: 96%;
  height: 95%;
  border-radius: 2%;
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
  margin: auto 0 auto 10px;
`;
