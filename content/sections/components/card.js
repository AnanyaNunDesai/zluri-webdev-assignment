import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <StyledCard backgroundColor={props.backgroundColor}>
            <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            <h1>{props.title}</h1>
            <h3>{props.image}</h3>
            <button>Contact Sales</button>
            <p>{props.description}</p>
        </StyledCard>
    );
}

export default Card;

const StyledCard = styled.li`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 2px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  font-family: "Sora";
  background-color: ${props => props.backgroundColor};


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
    background-color: #FFFFFF;
    font-weight: 400;
  }
`;
