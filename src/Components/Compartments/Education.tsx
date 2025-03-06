import styled from "styled-components";

const EducationWrapper = styled.main`
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

const SectionTitle = styled.h4`
  margin: 0 1vw;
  font-size: calc(2px + 2vw);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  margin-bottom: 10px;
  @media screen and (max-width: 750px){
    font-size: calc(2.5px + 3vw);
  }
`;

const Paragraph = styled.p`
  margin: 0 1vw;
  font-size: calc(1.5px + 2vw);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  margin-bottom: 20px;
  @media screen and (max-width: 750px){
    font-size: calc(2.5px + 2.5vw);
  }
`;

const Strong = styled.strong`
  color: rgb(204, 0, 0);
`;

const CourseList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  text-align: center;
`;

const CourseItem = styled.li`
  background-color: white;
  width:50%;
  margin: 2.5px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px black;

  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  font-size: calc(1px + 1.5vw);
  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 2px 4px black;
  }
  @media screen and (max-width: 750px){
    font-size: calc(2px + 2vw);
  }
`;

export default function Education() {

return (
  <EducationWrapper>
  <Title>Education</Title>

  <SectionTitle>Boston University</SectionTitle>
  <Paragraph>
    Pursuing a <Strong>Bachelor of Arts degree</Strong> in Computer Science and Biology
    <br/>
    Expected graduation: May 2026
  </Paragraph>

  <SectionTitle>Relevant Course in Computer Sceince</SectionTitle>
  <CourseList>
    <CourseItem>Combinatoric Structures</CourseItem>
    <CourseItem>Computer Systems</CourseItem>
    <CourseItem>Introduction to Database Systems</CourseItem>
    <CourseItem>Web Application Development</CourseItem>
  </CourseList>

  <SectionTitle>Relevant Course in Biology</SectionTitle>
  <CourseList>
    <CourseItem>Cell Biology</CourseItem>
    <CourseItem>Organic Chemistry I & II</CourseItem>
    <CourseItem>System Physiology</CourseItem>
    <CourseItem>Physics I and II</CourseItem>
    <CourseItem>Biochemistry</CourseItem>
  </CourseList>
  </EducationWrapper>
);
}
