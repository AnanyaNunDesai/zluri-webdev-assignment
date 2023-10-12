import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
// import Dropdown from "./dropdown"
import DropdownImg from "./drop-image";

const S4 = () => {
    return (

        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Put the created component below this.</p>

                </Title>
                <DropdownImg />
            </Container>
        </StyledWrapper>
    )
}

export default S4

const StyledWrapper = styled(Wrapper)`
background:#E1E8F8;
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
const QuestionsDiv= styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`