import styled from 'styled-components';
const logo = require("../../assets/white-logo.png");
const background = require("../../assets/background.png");
const logoPixel = require("../../assets/logo-pixel.png");

export const Container = styled.div`
    background-color: ${props => props.theme.background};
`;

export const Header = styled.div`
    background-color: black;
    position: relative;
    display: flex;
    flex-direction: row;
    align-content: center;
    padding: 60px 80px;
    height: -webkit-fill-available;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: right;
`;

export const HeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LogoImage = styled.img.attrs({
    src: logo
})` 
    width: 250px;
`;

export const EventDescription = styled.h1`
    max-width: 60%;
    margin: 30px 0px;
    margin-top: 60px;
`;

export const EventInfos = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 80px;
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
`;

export const Section = styled.div`
    margin-top: 125px;
    padding: 0px 80px;
`;

export const Title = styled.h1`
    font-size: 55px;
    line-height: 55px;
    font-weight: bold;
    margin: 0px;
    margin-bottom: 20px;
`;

export const Content = styled.p`
    font-size: 20px;
    line-height: 30px;
    margin: 0px;
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
`;

export const LogoPixel = styled.img.attrs({
    src: logoPixel
})`
    margin: 70px auto;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
`;