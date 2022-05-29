import { Button } from '@mui/material'
import styled from 'styled-components'
import { primaryColor } from '../../utils/colors'

const selectBackground = (type: number) => {
    switch (type) {
        case 0:
            return require('../../assets/images/restaurant-bg.png')
        case 1:
            return require('../../assets/images/ti-bg.jpeg')
        case 2:
            return require('../../assets/images/vestuario-bg.png')
        default:
            return require('../../assets/images/restaurant-bg.png')
    }
}

export const MainContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const DetailsContainer = styled.div`
    border-radius: 15px;
    background-image: ${(props: { type: number }) => `url(${selectBackground(props.type)})`}; 
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const MenuButton = styled(Button)`
    height: max-content;
    border-radius: 0 !important;
    border-bottom: ${(props: { selected: boolean }) => props.selected && `2px solid ${primaryColor} !important`};
`