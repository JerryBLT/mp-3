import styled from "styled-components";

const ExperienceWrapper = styled.main`
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

const CompanyName = styled.h4`
  margin: 0 1vw;
  font-size: calc(2px + 2vw);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  margin-bottom: 10px;
`;

const JobTitle = styled.h5`
    color: rgb(204, 0, 0);
    margin: 0 1vw;
    font-size: calc(1.5px + 1.5vw);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    margin-bottom: 10px;
`;

const DateRange = styled.p`
    color: #878484;
    margin: 0 1vw;
    font-size: calc(1px + 1.5vw);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    margin-bottom: 20px;
`;

const Description = styled.p`
    color: black;
    margin: 0 1vw;
    font-size: calc(1.5px + 2vw);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    margin-bottom: 20px;
`;

export default function Experience() {

  return (
    <ExperienceWrapper>
      <Title>Experience</Title>
        <CompanyName>Jean Mayer USDA Human Nutrition Research Center on Aging at Tufts University</CompanyName>
        <JobTitle>Clinical Research Assistant</JobTitle>
        <DateRange>Current</DateRange>
        <Description>Responsible for maintaining documentation of participant diets and exercise, ensuring compliance with regulatory standards. Collect vital signs and supervise participants involved in the NIH Nutrition for Precision Health Study.</Description>

        <CompanyName>Synterex</CompanyName>
        <JobTitle>Science Communication Intern</JobTitle>
        <DateRange>Summer 2023</DateRange>
        <Description>Performed literature searches in PubMed, translated complex medical information into accessible language for social media and blog articles. Created infographics and videos, used EndNote for referencing, edited regulatory materials, and prepared meeting minutes.</Description>
    </ExperienceWrapper>
  );
}
