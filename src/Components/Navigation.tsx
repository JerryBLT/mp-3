import { Link, useNavigate } from "react-router";
import { styled } from "styled-components"
const Nav = styled.nav`
    width: 30%;
    background-color: rgb(204, 0, 0);

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const NavList = styled.ul`
    font-size: calc(2px + 2vw);
    list-style: none;
    padding-left: 0;
    text-align: center;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        background-color: white;
        margin: 0;
    }
`;

const NavItem = styled.li`
    width: 90%;
    margin: 4vh auto;
    
    @media screen and (max-width: 750px) {
        font-size: calc(1.5px + 1.5vw);
        margin: 1% 1%;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    padding: 3vh 0;
    text-decoration: none;
    font-weight: bold;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: black;
    background-color: #89CFFF;
    border: 2px solid black;
    border-radius: 8px;
    
    &:hover {
        background-image: linear-gradient(to right, rgb(204, 0, 0),rgb(182, 184, 200));
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0.3px black;
    }

    @media screen and (max-width: 750px) {
        padding: 1% 1%;
        &:hover {
            transform: translate(1px, 1px);
            box-shadow: 2px 2px 0.3px #89CFFF;
        }
    }
`;

export default function Navigation() {
    
    const navigate = useNavigate();

    const NavigationHandle = (root: string) => {
        const title = root === "/" ? "Home" : root;
        document.title =  title + " | Resume";
        navigate(root);
    };


    return(
        <Nav>
            <NavList>
                <NavItem>
                <StyledLink to={`/`} onClick={() => NavigationHandle("/")}>Home</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={`/education`} onClick={() => NavigationHandle("Education")}>Education</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={`/experience`} onClick={() => NavigationHandle("Experience")}>Experience</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={`/extracurricular`} onClick={() => NavigationHandle("Extracurricular")}>Extracurricular</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={`/certification`} onClick={() => NavigationHandle("Certification")}>Certification</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to={`/project`} onClick={() => NavigationHandle("Project")}>Project</StyledLink>
                </NavItem>
            </NavList>
        </Nav>
    );
}