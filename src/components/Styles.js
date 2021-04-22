import { CenterFocusStrong } from '@material-ui/icons';
import { flexbox } from '@material-ui/system';
import styled from 'styled-components';

//background
import background from '../images/recipe123.jpg';


export const colors ={
    primary: "#fffff",
    theme: "BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "4B5563",
    dark2: "#9CA3AF",
    dark3: "#9CA3AF",
    red: "DC2626"
}

// Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
    `;

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary}
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${(props) => props.color ? props.color : colors.primary}
padding: 5px;
margin-bottom: 25px;
`;