import { styled } from "styled-components";
import Calculator from './Functions/Calculator';
import { Link } from "react-router-dom";

const ProjectWrapper = styled.main`
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

const FirstParagraph = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 2vw);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (max-width: 750px){
      font-size: calc(2.5px + 3vw);
    }
`;

const Paragraph = styled.p`
  margin: 0 1vw;
  font-size: calc(1.5px + 1.5vw);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  margin-bottom: 20px;
  @media screen and (max-width: 750px) {
    font-size: calc(2.5px + 2.5vw);
  }
`;

const NavList = styled.ul`
  font-size: calc(1.5px + 1.5vw);
  list-style: none;
  padding-left: 0;
  text-align: center;
`;

const NavItem = styled.li`
  margin: auto;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  font-weight: 600;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: black;
  background-color: white;
  border: 1px solid bisque;
  border-radius: 5px;
  
  &:hover {
    transform: translate(1px 1px);
    box-shadow: 1px 2px 2px black;
  }

  @media screen and (max-width: 750px) {
    font-size: calc(2px + 2vw);
  }
`;

export default function Project() {

    return (
        <ProjectWrapper>
            <Title>Project</Title>
            <FirstParagraph>BU Civic Hackathon Project</FirstParagraph>
            <nav>
                <NavList>
                    <NavItem>
                    <StyledLink to={"https://ecoquest2025.vercel.app/"} target={"_blank"}>Hackathon Project Website</StyledLink>
                    </NavItem>
                </NavList>
            </nav>
            <Paragraph>
                This project was completed by me and four other individuals. I contributed to the front-end development of the website. 
                We utilized the API from GBIF, one of the largest collectors of species information in the world. When you access the website, 
                it will request permission to determine your general location. Based on this location, the website will display the species in your 
                vicinity, however the limit of species that can be displayed is set on 30 right now, until further updates. You can also navigate to other 
                areas to learn more about different species. The website was published through Vercel, but it is not in its final form, as there are a few 
                additional features we would like to implement.
            </Paragraph>
            <FirstParagraph>My Online Calculator</FirstParagraph>
            <Calculator/>
        </ProjectWrapper>
    );
}
