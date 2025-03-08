import styled from "styled-components";

const CertificationWrapper = styled.main`
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
    margin-bottom: 10px;
    color: black;
    @media screen and (max-width: 750px){
        font-size: calc(2.5px + 2.5vw);
    }
`;

const Organization = styled.em`
    color: rgb(204, 0, 0);
`;

export default function Certification(){
    return(
        <CertificationWrapper>
            <Title>Certification</Title>

            <Paragraph>
                I completed <strong>Biomedical Research</strong> training with the <em><u>CITI Program</u></em> in partnership with <Organization>Tufts University</Organization>. This program is essential 
                for ensuring ethical conduct and regulatory compliance in research. It provides researchers with vital knowledge about the protection 
                of human subjects, data management, and responsible research practices.
            </Paragraph>
            <Paragraph>
                I also completed training on <strong>Good Clinical Practice (GCP)</strong> for clinical trials involving investigational drugs and medical devices, with 
                a focus on U.S. FDA regulations. This course was designed to educate researchers about GCP standards specific to FDA-regulated clinical trials 
                and to fulfill the requirements set by the NIH.
            </Paragraph>
            <Paragraph>
                I am also certified in CPR. My certification comes from  <Organization>Boston University</Organization> ER403 course. 
           </Paragraph>
        </CertificationWrapper>
    );
} 