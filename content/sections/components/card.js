import React from 'react';
import styled, { css } from 'styled-components';

const Card = (props) => {
  return (
    <StyledCard backgroundColor={props.backgroundColor} isMiddleCard={props.isMiddleCard}>
      {props.isMiddleCard && <StyledPopularTitle>Most Popular</StyledPopularTitle>}
      <h1>{props.title}</h1>
      <h3>{props.image}</h3>
      <button>Contact Sales</button>
      <p>{props.description}</p>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.li`
  position: relative;
  border-radius: ${(props) => (props.isMiddleCard ? '0 0 20px 20px' : '20px')};
  padding: 20px;
  margin: 2px;
  max-width: 300px;
  font-family: 'Sora';
  background-color: ${(props) => props.backgroundColor};

  h1 {
    margin-top: 10px;
    font-weight: 600;
  }

  h3 {
    padding-top: 0px;
    margin-top: -20px;
    width: 75%;
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-size: 14px;
    color: #555;
  }

  button {
    border-radius: 40px;
    padding: 15px;
    background-color: #ffffff;
    font-weight: 400;
  }
`;

const StyledPopularTitle = styled.h4`
  position: absolute;
  top: -60px; /* Adjust the position as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffce70;
  padding: 0px 20px;
  border-radius: 20px 20px 0 0;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  text-align: center; /* Center the text */
  font-family: 'Lexend';
  color: #363535;
`;
