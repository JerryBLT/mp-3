import { Link, Route, Routes, useParams } from "react-router";
import { styled } from "styled-components";
import { useEffect } from "react";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

// the links
import Index from "./Components/Compartments/Index";
import Education from "./Components/Compartments/Education";
import Experience from "./Components/Compartments/Experience";
import Extracurricular from "./Components/Compartments/Extracurricular";
import Certification from "./Components/Compartments/Certification";
import Project from "./Components/Compartments/Project";

const PageWrapper = styled.div`
    margin: auto;
    width: 80vw;
`;

const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    background-color: rgb(182, 184, 200);

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
`;

const FooterWrapper = styled.footer`
    background-color: rgb(156, 13, 13);
    color: #C4A484;
    padding: 1vh 1vw;
    text-align: center;

    a {
        color: #C4A484;
    }
`;

export default function Root(){
    const currentPath=useParams();
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
    if(lastValue===""){
        document.title="Home | Resume";
        }else {
        document.title=lastValue+" | Resume";
    }   
    },[lastValue])

    return (
        <PageWrapper>
            <Header/>
                <Container>
                    <Navigation/>
                    <Routes>
                        <Route path={`/`} element={<Index/>} />
                        <Route path={`/education`} element={<Education/>} />
                        <Route path={`/experience`} element={<Experience/>} />
                        <Route path={`/extracurricular`} element={<Extracurricular/>} />
                        <Route path={`/certification`} element={<Certification/>} />
                        <Route path={`/project`} element={<Project/>} />
                    </Routes>
                </Container>
                <FooterWrapper>
                    <p>All rights reserved by Jerry Teixeira: <Link to={'/'}>Credits</Link> &#169;</p>
                </FooterWrapper>
        </PageWrapper>
    );
}