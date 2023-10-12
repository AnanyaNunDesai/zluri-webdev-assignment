import React from "react";
import Card from "./components/card";
import styled from "styled-components";
import { Container } from "./style";

const concepts = [
    {
        title: "Growth",
        image: "Discover and manage all your apps in one place",
        description: "Placeholder",
        backgroundColor: '#CBFFEE'
    },
    {
        title: "Scale",
        image: "Complete SaaS optimization by leveraging license management & financial intelligence",
        description: "Placeholder",
        backgroundColor: "#FFEEB9",
        isMiddleCard: true
    },
    {
        title: "Enterprise",
        image: "Powerful automations, advanced security & access control that deliver robust & streamlined SaaSOps",
        description: "Placeholder",
        backgroundColor: "#C9E8FF"
    },
];

const S5 = (props) => {
  return (
    <StyledContainer>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;300;400;500;600;700&display=swap" rel="stylesheet"/>
      <StyledList>
        {concepts.map((concept, index) => (
          <Card
            key={index}
            image={concept.image}
            title={concept.title}
            description={concept.description}
            backgroundColor={concept.backgroundColor}
            isMiddleCard={concept.isMiddleCard}
          />
        ))}
      </StyledList>
    </StyledContainer>
  );
}

export default S5

const StyledContainer = styled(Container)`
  /* Add any additional styling for the container here if needed */
`;

const StyledList = styled.ul`
  list-style: none; /* Remove bullets */
  display: flex; /* Display items horizontally */
  justify-content: space-between; /* Space between items */
  padding: 0; /* Remove default padding */
`;

