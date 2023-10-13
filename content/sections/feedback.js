import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Feedback = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Thanks for taking up this assignment.
                    </h4>
                    <p>Anything you would like to add over here?</p>
                </Title>

                <FeedbackDiv>
                    <p>
                        This was such an interesting and fun task. I really enjoyed it and it wasn't very stressful,
                        and I could complete it without worrying about the time crunch! I learnt a lot as well and
                        honed my research and error solving
                        skills so that is also very nice. Thanks for extending me this opportunity! <br />
                    </p>
                    <p>
                        PS. I changed both the website tab name as well as the name at the top of the page to mine, just in case.
                    </p>
                    <h3>
                        ✨Here's my&nbsp;
                        <a href="https://ananyanundesai.github.io/ananya-nun-desai/" target="_blank" rel="noreferrer">portfolio
                            <br /></a>
                        &nbsp;for you to check out!✨
                    </h3>
                    <h3>
                        🎵Here is my&nbsp;
                        <a href="https://open.spotify.com/playlist/46KaowzEEfEz6XBfqu86SG?si=28fd816b684741e4" target="_blank" rel="noreferrer">
                            favorite playlist
                        </a>
                        &nbsp;to listen to while I code. It's my favorite game's OST!🎵
                    </h3>
                </FeedbackDiv>

            </Container>
        </StyledWrapper>
    )
}

export default Feedback

const StyledWrapper = styled(Wrapper)`
background:#FFFFFF;
`

const Title = styled.div`
h4{
    font-size: 24px;
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
    font-size: 16px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 700;
line-height: 28px;
}
`
const FeedbackDiv = styled.div`
p{
    font-size:20px;
    color: #4614D6;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400; 
}

a {
    font-family: 'Lexend';
    color: #936FFB;
}

h3 {
    color: #5514D6;
    font-family: 'Lexend';
    font-size: 16px;
    font-weight: 400;
}
`