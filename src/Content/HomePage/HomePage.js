import styled from 'styled-components';

const StyledHomePage = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center
`;

const StyledHomePage_Logo = styled.img`
    display: block;
    height: 20%;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
`;

const StyledHomePage_Text = styled.p`
    margin: 5%;
    font-size: 200%;
`;

export default function HomePage() {
    return (
        <StyledHomePage>
            <StyledHomePage_Logo src = '/images/Logo_Blue.png'/>
            <StyledHomePage_Text>Opal CalcVue</StyledHomePage_Text>
            <StyledHomePage_Text>Select a medication or tab to begin</StyledHomePage_Text>
        </StyledHomePage>
    )
}