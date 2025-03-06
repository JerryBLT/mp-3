import { styled } from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-image: linear-gradient(to right, rgb(204, 0, 0),rgb(182, 184, 200));
    color: white;

    h1 {
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);    }

    p {
        margin: 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header(){
    return(
        <HeaderStyled>
            <h1>Jerry Teixeira</h1>
            <p><em>Welcome to my Online Resume!</em></p>
        </HeaderStyled>
    );
}