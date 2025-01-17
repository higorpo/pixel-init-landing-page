import styled from 'styled-components';
import color from 'color';

export const ButtonStyled = styled.button`
    outline: none;
    background: ${props => props.theme[props.color]};
    padding: 16px 42px;
    font-size: ${props => props.fontSize}px;
    border: none;
    border-radius: 0px;
    font-weight: bold;
    border-bottom: 10px solid;
    border-bottom-color: ${props => color(props.theme[props.color]).darken(0.5).rgb().string()};
    cursor: pointer;
    color: white;

    &:active {
        border-bottom: 0px;
        margin-top: 10px
    }


    @media screen and (max-width: 510px) {
        padding: 8px 26px;
    }

    @media screen and (max-width: 354) {
        font-size: 10px;
    }
`;
