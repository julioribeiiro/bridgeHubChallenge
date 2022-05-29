import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 85%;
    height: 700px;
    background-color: #FFF;
    background-size: auto;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        height: 1300px;
    }

`

export const TopMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70%;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 15px 30px 5px 30px;
    border-bottom: 1px solid #c4c4c4;
`

export const InvestmentTitle = styled.h1`
    margin: 0; 
    font-size: 4vh;
`

export const TopInformations = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding: 15px 30px;
    width: 70%;
    border-bottom: 1px solid #c4c4c4;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const MiddleContainer = styled.div`
    width: 90%;
    display: flex;
    height: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const LeftIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 30px 0;
        min-height: 250px;
    }
`

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media screen and (max-width: 830px) {
        width: 100%;
    }
`

export const Video = styled.iframe`
    width: 560px;
    height: 315px;

    @media screen and (max-width: 830px) {
        width: 100%;
        height: 250px;
        margin: 30px 0;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 250px;
        font-size: 18px;
    }
`;

export const BottomContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(0,65,107,1) 0%, rgba(27,125,189,1) 100%);
    height: 30%;
    border-radius: 0 0 20px 20px;

`

export const BottomIconsContaienr = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;

    @media screen and (max-width: 1400px) {
        width: 70%;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 180px;
        flex-direction: column;
    }
`

export const RightCornerInformation = styled.div`
    position: absolute;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #fff;

    @media screen and (max-width: 768px) {
        bottom: 30px;
    }
`

export const RightCornerInformationText = styled.span`
    width: 50%;
    text-align: center;
`

export const BoldText = styled.b`
    color: #000;
    font-weight: 700 !important;
`
export const ModalScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    background-color: #FFF;
    padding: 40px;
    border-radius: 10px;
`

export const SucessMessageContainer = styled.div`
    z-index: 15;
    position: absolute;
    top: 100px;
    right: ${(props: { open: boolean }) => props.open ? '1%' : '0'};
    opacity: ${(props: { open: boolean }) => (props.open ? '100%' : '0')};
    transition: 0.3s ease-in-out;
`