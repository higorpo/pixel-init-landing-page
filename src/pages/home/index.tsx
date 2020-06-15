import React, { useState, useEffect, useCallback } from 'react';
import { Container, Header, HeaderDetails, LogoImage, EventDescription, DaysLeftBanner, Section, Title, Content, List, ListItem, ListTitle, ListDescription, ListIcon, BannerDownloadApp, LogoPixel, EventInfos, EventInfo, InfoIcon, InfoLabel } from './styles';
import Button from '../../components/Button';
import { MdRecordVoiceOver, MdRssFeed, MdGroup, MdTagFaces, MdLocationOn, MdDateRange } from 'react-icons/md';

const home: React.FC = () => {
    const [timeRemaining, setTimeRemaining] = useState<string>("...");

    useEffect(() => {
        document.title = "Pixel Init 2020";

        calculateTimeRemaining();
        setInterval(calculateTimeRemaining, 60 * 1000)
    }, [])

    /**
     * Functions
     */
    const calculateTimeRemaining = useCallback(() => {
        // @ts-ignore
        var delta = Math.abs(new Date("2020-07-09 18:30") - new Date()) / 1000;

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
                        Faça parte da 2ª edição do evento tecnológico da Pixel, desta vez totalmente online.
                    </EventDescription>
                    <a href="https://www.sympla.com.br/pixel-init__867450"><Button fontSize={38}>inscrever-se</Button></a>
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
                    O "Pixel Init" é o evento de tecnologia da Pixel, empresa júnior de Sistemas de Informação e Ciências da Computação da Universidade Federal de Santa Catarina (UFSC). O "Init" de seu nome faz alusão à inicialização do usuário no mundo tecnológico, visto que a Pixel acolhe graduandos dos referidos cursos. Sua primeira edição aconteceu em 2019.2 e foi realizada de modo presencial. Agora, na sua versão 100% remota, o "Pixel Init" busca reunir três âmbitos: o profissional da área, as pesquisas tecnológicas e as tendências do mercado de TI no Brasil e no mundo - com especial consideração à crise do Covid-19 de 2020.
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
                            Palestrantes
                        </ListTitle>
                        <ListDescription>
                            Eles são profissionais da área, pesquisadores e intelectuais, ou empreendedores do mercado de TI, buscando entregar seu ângulo de experiência para você
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
                            Possibilidade de contato com diversos profissionais da região de Florianópolis e de todo Brasil para trocar informações e experiências de trabalho
                        </ListDescription>
                    </ListItem>
                    <ListItem>
                        <ListIcon>
                            <MdGroup />
                        </ListIcon>
                        <ListTitle>
                            Hackathon
                        </ListTitle>
                        <ListDescription>
                            Ambiente colaborativo para você colocar em prática seu conhecimento e experiência em troca de resultados, reconhecimento e prêmios
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
                            Buscamos promover um ambiente que seja informativo mas também divertido, para que você compreenda as novidades da área de forma leve
                        </ListDescription>
                    </ListItem>
                </List>
            </Section>

            <Section>
                <Title>Patrocinadores</Title>
                <Content style={{ marginBottom: 20 }}>
                    Afim de patrocinar o evento? Entre em contato conosco e seja um de nossos patrocinadores. Você tem a sua empresa destacada em nossos espaços de publicidade online acessados por um público interessado em tecnologia de todas as partes do país!
                </Content>
                <a target="__blank" href="mailto:pixelinit@ejpixel.com.br">
                    <Button
                        color="accent">
                        patrocinar
                    </Button>
                </a>
            </Section>
            <BannerDownloadApp>
                <span>Baixe o aplicativo do Pixel Init no seu celular!</span>
                <a href="javascript:alert('Em breve!')">
                    <Button
                        color="primary">
                        baixar app
                    </Button>
                </a>
            </BannerDownloadApp>

            <LogoPixel />
        </Container>
    );
}

export default home;