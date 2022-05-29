import styled from 'styled-components'
import { primaryColor } from '../../utils/colors'

export const Container = styled.div`
    position: relative;
    overflow-x: hidden;
`

export const TopImage = styled.img`
    border-radius: 10px;
`

export const WaveContainer = styled.div`
    position: absolute;
    top: 105px;
`

export const SelfIconContainer = styled.div`
    border: 1px solid #E0E0E0;
    padding: 2px 2px 0 2px;
    border-radius: 5px;
    cursor: pointer;

    svg path {
        fill: ${(props: { selected: boolean }) => props.selected && primaryColor}
    }

    &:hover {
        background-color: #F2E7FE;
    }

`

export const CardInformationContainer = styled.div`
    border-left: dashed 1px #000;
    margin: 15px 0 0 0;
    padding-left: 15px;
`

export const CardBusinessName = styled.h2`
    margin: 5px 0;
    color: #000;
    font-weight: 600;
    font-size: 25px;
`

export const CardBusinessType = styled.span`
    margin: 0;
    color: #628AF8;
    font-size: 14px;
    font-weight: 300;
`

export const CardBusinessAddress = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 300;
`

export const CardBusinessDescription = styled.p`
    margin: 20px 0;
    font-size: 14px;
    font-weight: 300;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100px;
    top: 140px;
    right: 10px;
`

export const BottomCardContainer = styled.div`
    margin: 0 15px;
`

export const InformationSquaresContainer = styled.div`
    display: flex; 
    justify-content: space-between;
`