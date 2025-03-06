import styled from "styled-components";

const ExtracurricularWrapper = styled.main`
    width: 70%;
    background-color: #89CFFF;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100vh;
    }
`;

const Title = styled.h3`
    border-bottom: 2px solid rgb(204, 0, 0);
    padding-bottom: 10px;
    text-align: center;
    font-size: calc(2.5px + 2.5vw);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    @media screen and (max-width: 750px){
        font-size: calc(3px + 3vw);
    }
`;

const Paragraph = styled.p`
    margin: 0 1vw;
    font-size: calc(1.5px + 2vw);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    margin-bottom: 1.5rem;
    color: black;
    @media screen and (max-width: 750px){
        font-size: calc(2.5px + 2.5vw);
    }
`;

const Organization = styled.strong`
    color: rgb(204, 0, 0);
`;

export default function Extracurricular() {
  return (
    <ExtracurricularWrapper>
      <Title>Extracurricular Activities</Title>

      <Paragraph>
        Since the fall of 2024, I have been a part of the <Organization>BU Red Cross</Organization> community. My primary role involves 
        assisting with the sign-in process for blood donors by verifying their identities and ensuring 
        accurate entries in our system. I also engage with individuals to raise awareness about the 
        importance of donating blood.
      </Paragraph>

      <Paragraph>
        Additionally, I was involved with <Organization>Minds Matter Boston (MMB)</Organization> from the fall of 2019 to the spring of 2022, where 
        I participated as a mentee. During that time, I attended weekly workshops focused on college preparation and 
        career development.
      </Paragraph>

      <Paragraph>
        I'm currently collaborating with friends to create a gym club for BU students where people can connect with others who 
        share a similar work ethic and be productive.
      </Paragraph>
    </ExtracurricularWrapper>
  );
}
