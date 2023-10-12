import React from "react";
import {
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Question from "../../content/sections/questions";
import Q1 from "../../content/sections/q1";
import S1 from "../../content/sections/s1";
import S5 from "../../content/sections/s5";
import QuestionsHeading from "../../content/sections/q2";
import Q3 from "../../content/sections/q3";
import Q4 from "../../content/sections/q4";
import Feedback from "../../content/sections/feedback";
import Navigation from "../../content/sections/navigation";
import Header from "../../content/sections/header";
import Layout from "../../content/sections/layout";
import S3 from "../../content/sections/s3";
import S4 from "../../content/sections/s4";
import Q5 from "../../content/sections/q5";

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Seo title="Ananya Desai" />
        <Navigation />
        <div>
          <Header />
          <QuestionsHeading />
          <Question />
          <Q1 />
          <S1 />
          <Q3 />
          <S3 />
          <Q4 />
          <S4 />
          <Q5 />
          <S5 />
          <Feedback />
        </div>
      </Layout>
    </div>
  );
}
