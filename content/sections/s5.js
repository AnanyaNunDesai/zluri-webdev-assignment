import React, { useEffect, useState } from "react";
import Card from "./components/card";
import styled from "styled-components";
import { Container } from "./style";

const concepts = [
    {
        title: "Growth",
        image: "Discover and manage all your apps in one place",
        description: [
          "Complete SaaS discovery",
          "Unlimited App Integrations",
          "Unlimited financial integrations",
          "Complete user and app management",
          "All financial transactions Basic Reports"
        ],
        backgroundColor: '#CBFFEE'
    },
    {
        title: "Scale",
        image: "Complete SaaS optimization by leveraging license management & financial intelligence",
        description: [
          "Complete license management",
          "Complete vendor & renewal management",
          "Cost optimization insights",
          "Budgeting & chargebacks",
          "Advanced Reports"
        ],
        backgroundColor: "#FFEEB9",
        isMiddleCard: true
    },
    {
        title: "Enterprise",
        image: "Powerful automations, advanced security & access control that deliver robust & streamlined SaaSOps",
        description: [
          "Workflow Automations",
          "Employee App Store",
          "Security and Compliance",
          "Dedicated account manager",
          "Audit logs",
          "Custom reports"
        ],
        backgroundColor: "#C9E8FF"
    },
];

const S5 = (props) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleMobileView();
    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("reize", handleMobileView);
    };
  }, []);

  const mobileCardDisplay = () => {
    if (isMobileView) {
      const mostPopularIdx = concepts.findIndex((concept) => concept.isMiddleCard === true);
      const firstElem = concepts[0];

      concepts[0] = concepts[mostPopularIdx];
      concepts[mostPopularIdx] = firstElem;

      return (
        <StyledMobileView>
          {concepts.map((concept, index) =>  
            <Card
              key={index}
              image={concept.image}
              title={concept.title}
              description={concept.description}
              backgroundColor={concept.backgroundColor}
              isMiddleCard={concept.isMiddleCard}
            />
          )}
        </StyledMobileView>
      );
    } else {
      return (
        concepts.map((concept, index) => (
          <Card
            key={index}
            image={concept.image}
            title={concept.title}
            description={concept.description}
            backgroundColor={concept.backgroundColor}
            isMiddleCard={concept.isMiddleCard}
          />
        ))
      );
      ;
    }
  };

  return (
    <StyledContainer>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;300;400;500;600;700&display=swap" rel="stylesheet"/>
      <StyledTab>
        <StyledTabTitle>
          <h3>SaaS Management</h3>
          <h3>Lifecycle Management</h3>
        </StyledTabTitle>
        <StyledTabDivider />
      </StyledTab>
      <StyledList>
        {mobileCardDisplay()}
      </StyledList>
    </StyledContainer>
  );
}

export default S5

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 75px;

  @media(min-width: 768px) {
    background-image: radial-gradient(circle at top right, #F0BBC4 1%, transparent 50%), radial-gradient(circle at center left, #F9DD74 1%, transparent 50%);
    background-size: 300px 300px, 300px 300px;
    background-position: top right, center left;
    background-repeat: no-repeat;
  }
`;

const StyledMobileView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;

  @media(max-width: 768px) {
    background-image: radial-gradient(circle at top right, #F0BBC4 1%, transparent 50%), radial-gradient(circle at center left, #F9DD74 1%, transparent 50%);
    background-size: 300px 300px, 300px 300px;
    background-position: top right, center left;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTabTitle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    font-family: Lexend Regular;
    color: #545454;
  }

    @media (max-width: 768px) {
    width: 90%; 
    margin: 15px auto;  

    h3{
        text-align: center;
    }
  }
`;

const StyledTabDivider = styled.div`
  width: 80%;
  background-color: #DDDDDD;
  height: 2px;
  background-image: linear-gradient(to right, #DDDDDD 18%, #FFCE70 18%, #FFCE70 40%, #DDDDDD 40%);

    @media (max-width: 768px) {
    width: 100%; 
    margin-top: 10px; 
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  gap: 20px;
`;

