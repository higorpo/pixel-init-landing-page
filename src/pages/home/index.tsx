import React, { useState, useEffect, useCallback } from 'react';
import { Container, Header, HeaderDetails, LogoImage, EventDescription, DaysLeftBanner, Section, Title, Content, List, ListItem, ListTitle, ListDescription, ListIcon, BannerDownloadApp, LogoPixel, EventInfos, EventInfo, InfoIcon, InfoLabel } from './styles';
import Button from '../../components/Button';
import { MdRecordVoiceOver, MdRssFeed, MdGroup, MdTagFaces, MdLocationOn, MdDateRange } from 'react-icons/md';

const home: React.FC = () => {
    const [timeRemaining, setTimeRemaining] = useState<string>("...");

    useEffect(() => {
        calculateTimeRemaining();
        setInterval(calculateTimeRemaining, 60 * 1000)
    }, [])

    /**
     * Functions
     */
    const calculateTimeRemaining = useCallback(() => {
        // @ts-ignore
        var delta = Math.abs(new Date("2020-07-09 18:00") - new Date()) / 1000;

        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        var minutes = Math.floor(delta / 60) % 60;


        if (days >= 1) {
            setTimeRemaining(`${days} ${days == 1 ? "dia" : "dias"}`)
        } else {
            if (hours >= 1) {
                setTimeRemaining(`${hours} ${hours == 1 ? "hora" : "horas"}`)
            } else {
                if (minutes >= 1) {
                    setTimeRemaining(`${minutes} ${minutes == 1 ? "minuto" : "minutos"}`)
                } else {
                    setTimeRemaining("agora")
                }

            }
        }
    }, []);

    return (
        <Container>
            <Header>
                <HeaderDetails>
                    <LogoImage />
                    <EventDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </EventDescription>
                    <Button fontSize={38}>inscrever-se</Button>
                </HeaderDetails>
                <EventInfos>
                    <EventInfo>
                        <InfoIcon>
                            <MdLocationOn />
                        </InfoIcon>
                        <InfoLabel>ONLINE</InfoLabel>
                    </EventInfo>
                    <EventInfo>
                        <InfoIcon>
                            <MdDateRange />
                        </InfoIcon>
                        <InfoLabel>09, 16 E 23 DE JULHO</InfoLabel>
                    </EventInfo>
                </EventInfos>
            </Header>
            <DaysLeftBanner>
                <span>o evento começa em</span>
                <span>{timeRemaining}</span>
            </DaysLeftBanner>

            <Section>
                <Title>Sobre o evento</Title>
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Content>
            </Section>

            <Section>
                <Title>O que você vai encontrar aqui?</Title>

                <List>
                    <ListItem>
                        <ListIcon>
                            <MdRecordVoiceOver />
                        </ListIcon>
                        <ListTitle>
                            Otimos palestrantes
                        </ListTitle>
                        <ListDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ListDescription>
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <MdRssFeed />
                        </ListIcon>
                        <ListTitle>
                            Networking
                        </ListTitle>
                        <ListDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ListDescription>
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <MdGroup />
                        </ListIcon>
                        <ListTitle>
                            Novas amizades
                        </ListTitle>
                        <ListDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ListDescription>
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <MdTagFaces />
                        </ListIcon>
                        <ListTitle>
                            Diversão
                        </ListTitle>
                        <ListDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </ListDescription>
                    </ListItem>
                </List>
            </Section>

            <Section>
                <Title>Patrocinadores</Title>
                <Content>
                    Ajude-nos a realizar este evento.
                    Seja um dos patrocinadores do evento e tenha sua empresa destacada em nossos espaços dedicados a publicidade.
                    Entre em contato conosco para saber mais!
                </Content>
                <Button
                    color="accent"
                    style={{
                        marginTop: 20
                    }}>
                    patrocinar
                </Button>
            </Section>
            <BannerDownloadApp>
                <span>Baixe o aplicativo do Pixel Init no seu celular!</span>
                <Button
                    color="primary">
                    baixar app
                </Button>
            </BannerDownloadApp>

            <LogoPixel />
        </Container>
    );
}

export default home;