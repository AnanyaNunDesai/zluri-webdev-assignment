import React from 'react';
import styled, { css } from 'styled-components';

const Card = (props) => {
  return (
    <StyledCard backgroundColor={props.backgroundColor} isMiddleCard={props.isMiddleCard}>
      {props.isMiddleCard && <StyledPopularTitle>Most Popular</StyledPopularTitle>}
      <h1>{props.title}</h1>
      <h3>{props.image}</h3>
      <button>Contact Sales</button>
      <ul>
        {props.description.map(bullet => <li>{bullet}</li>)}
      </ul>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.li`
  position: relative;
  border-radius: ${(props) => (props.isMiddleCard ? '0 0 20px 20px' : '20px')};
  padding: 20px 20px 100px 20px;
  margin: 2px;
  max-width: 300px;
  background-color: ${(props) => props.backgroundColor};

  h1 {
    font-family: 'Sora';
    margin-top: 10px;
    font-weight: 600;
    color: #141C32;
  }

  h3 {
    font-family: 'Lexend';
    height: 20%;
    margin-top: -10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: #393939;
  }

  p {
    font-size: 14px;
    color: #555;
  }

  button {
    font-family: 'Sora';
    border-radius: 40px;
    padding: 13px 15px;
    background-color: #ffffff;
    font-weight: 500;
    font-size: 12px;
    border-width: 0.5px;
    color: #2E2E2E;
  }

  ul {
    padding: 0;
    list-style-type: disc;
    list-style-color: #141C32;
    color: #141C32;
    width: 210px;
    font-size: 12px;
    margin-left: 10px;
    margin-top: 20px;
    font-weight: 500;
    font-family: 'Lexend';
  }
`;

const StyledPopularTitle = styled.h4`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffce70;
  padding: 0px 20px;
  border-radius: 20px 20px 0 0;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  font-family: 'Lexend';
  color: #363535;
`;
