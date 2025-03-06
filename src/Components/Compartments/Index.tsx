import { styled } from "styled-components";

const HomeWrapper = styled.main`
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
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
  font-size: calc(2px + 2vw);
  @media screen and (max-width: 750px){
    font-size: calc(2.5px + 2.5vw);
  }
  margin-bottom: 5px;
`;

const Strong = styled.strong`
  color: rgb(204, 0, 0);
`;

const Underline = styled.u`
  text-decoration: none;
  border-bottom: 2px solid rgb(204, 0, 0);
`;

const Image = styled.div`
  margin: 5px;
  text-align: center;
  margin-bottom: 20px;

  img {
    max-width: 70%;
    height: auto;
  }
`;

export default function Index() {
  return (
    <HomeWrapper>
      <Title>Home</Title>
      <Image>
        <img src="/jerry.jpg" alt="Jerry profile picture" />
      </Image>
      <Paragraph>
        My name is Jerry Teixeira, and I am a junior at <Strong>Boston University</Strong> majoring in Computer Science and Biology. 
        I want to integrate my interdisciplinary background in biology and computer science to contribute to the ongoing 
        research on biological data, such as information stored within DNA strands, and provide new insight that could better 
        human health.<br /><br />

        Welcome to my website! Here you will find my <Underline><em>Education</em></Underline> and my <Underline><em>Experience</em></Underline> history, as well 
        as other information that might interest you.
      </Paragraph>
    </HomeWrapper>
  );
};

