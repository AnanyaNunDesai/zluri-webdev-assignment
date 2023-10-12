import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import Dropdown from './dropdown'; // Adjust the import path based on your project structure


const S4 = () => {
    return (
        <StyledWrapper>
            <DropdownContainer>
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Put the created component below this.</p>
                    <Dropdown />
                </Title>
            </DropdownContainer>
        </StyledWrapper>
    );
};

export default S4;

const DropdownContainer = styled(Container)`
  display: inline-block;
`;


const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
// Rest of the styles and components remain the same as provided in the previous example.
