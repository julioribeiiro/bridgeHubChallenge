import styled from 'styled-components'
import { primaryColor } from '../../utils/colors'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
    background: ${primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px;

    svg path {
        fill: #FFF;
    }
`
export const InformationsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const InformationTitle = styled.h5`
    font-weight: 200;
    margin: 0;
    color: ${(props: { white?: boolean }) => props.white && '#FFF'};
`

export const InformationBottom = styled.span`
    color: ${(props: { white?: boolean }) => props.white ? '#FFF' : '#000'};
    font-weight: 500;
    font-size: 14px;
`