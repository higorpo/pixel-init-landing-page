import styled from 'styled-components';
const logo = require("../../assets/white-logo.png");
const background = require("../../assets/background.png");
const logoPixel = require("../../assets/logo-pixel.png");

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    max-width: 1349px;
    margin: 0 auto;
`;

export const Header = styled.div`
    background-color: black;
    position: relative;
    display: flex;
    flex-direction: row;
    align-content: center;
    padding: 60px 80px;
    height: -webkit-fill-available;
    max-height: 657px;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: right;

    @media screen and (max-width: 600px) {
        padding: 20px;
    }
`;

export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    /* @media screen and (max-width: 865px) {
        align-items: center;
    } */

    @media screen and (max-width: 600px) {
        align-items: center;

        > button {
            font-size: 27px;
            white-space: nowrap;
            width: 100%;
        }
    }
`;

export const LogoImage = styled.img.attrs({
    src: logo
})` 
    width: 250px;

    @media screen and (max-width: 950px) {
        width: 160px;
    }
`;

export const EventDescription = styled.h1`
    max-width: 60%;
    margin: 30px 0px;
    margin-top: 60px;
    
    @media screen and (max-width: 980px) {
        font-size: 27px;
        line-height: 30px;
    }

    @media screen and (max-width: 860px) {
        max-width: 75%;
    }

    @media screen and (max-width: 865px) {
        max-width: 85%;
        margin-top: 40px;
    }

    @media screen and (max-width: 600px) {
        max-width: none;
        text-align: center;
    }
`;

export const EventInfos = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 80px;

    @media screen and (max-width: 865px){
        align-self: flex-end;
        left: 80px;
        right: 0px;
    }

    @media screen and (max-width: 600px)  {
        flex-direction: column;
        left: 20px;
        margin-top: -10px;
    }
`;

export const EventInfo = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */

    * {
        color: white;
    }

    & {
        margin-right: 10px;

        &:last-child {
            margin-right: 0px;
        }
    }
`;

export const InfoIcon = styled.div`
    font-size: 20px;
    margin-right: 5px;
`;

export const InfoLabel = styled.span`
    font-size: 20px;
    white-space: nowrap;
`;

export const DaysLeftBanner = styled.div`
    background: linear-gradient(90deg, #608E2E 0%, #B04462 50%);
    height: 165px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 80px;

    > span {
        color: white;
        font-weight: bold;
        font-size: 60px;
        text-transform: uppercase;

        :last-child {
            text-transform: none;
        }
    }

    @media screen and (max-width: 780px) {
        > span {
            font-size: 30px;

            &:first-child {
                max-width: 70%;
            }
        }
    }
    
    @media screen and (max-width: 775px) {
        padding-left: 35px; 
        padding-right: 35px; 
        height: 105px;
        
        > span {
            font-size: 20px;
        }
    }
`;

export const Section = styled.div`
    margin-top: 125px;
    padding: 0px 80px;

    @media screen and (max-width: 800px) {
        margin-top: 85px;
    }

    @media screen and (max-width: 775px) {
        padding-left: 35px; 
        padding-right: 35px; 
    }
`;

export const Title = styled.h1`
    font-size: 55px;
    line-height: 55px;
    font-weight: bold;
    margin: 0px;
    margin-bottom: 20px;

    @media screen and (max-width: 800px) {
        font-size: 35px;
        line-height: 35px;
    }
`;

export const Content = styled.p`
    font-size: 20px;
    line-height: 30px;
    margin: 0px;

    @media screen and (max-width: 800px) {
        font-size: 15px;;
        line-height: 30px;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        margin-right: 10px;

        &:last-child {
            margin-right: 0px;
        }
    }

    @media screen and (max-width: 1100px) {
        flex-wrap: wrap;
    }
`;

export const ListItem = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;

    > * {
        color: white;
    }

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }

    @media screen and (max-width: 1100px) {
        flex: 1;
        min-width: 200px;
    }
`;

export const ListIcon = styled.div`
    > * {
        font-size: 50px;
    }
`;

export const ListTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
`;

export const ListDescription = styled.span`
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
`;

export const BannerDownloadApp = styled.div`
    display: flex;
    flex-direction: row;
    padding: 50px;
    background-color: #2E2E2E;
    margin: 0px 80px;
    margin-top: 125px;

    > span {
        color: white;
        font-weight: bold;
        font-size: 46px;
        flex: 1;
        padding-right: 70px;
    }

    @media screen and (max-width: 1095px) {
        > span {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 840px) {
        > span {
            font-size: 20px;
            align-self: center;
        }
    }

    @media screen and (max-width: 775px) {
        margin-left: 35px; 
        margin-right: 35px; 
    }

    @media screen and (max-width: 720px) {
        flex-direction: column;
        padding: 30px;

        > span {
            font-size: 30px;
            margin-bottom: 20px;
            padding: 0px;
        }
    }

    @media screen and (max-width: 500px) {
        > span {
            font-size: 20px;
        }
    }
`;

export const LogoPixel = styled.img.attrs({
    src: logoPixel
})`
    margin: 70px auto;
    left: 50%;
    position: relative;
    transform: translateX(-50%);

    @media screen and (max-width: 720px) {
        width: 40%;
    }
`;