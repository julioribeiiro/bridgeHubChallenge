import React, { useState } from 'react';
import {
    Container,
    IconsContainer,
    WaveContainer,
    SelfIconContainer,
    TopImage,
    CardInformationContainer,
    CardBusinessName,
    CardBusinessType,
    CardBusinessAddress,
    BottomCardContainer,
    CardBusinessDescription,
    InformationSquaresContainer
} from './styles';
import WaveIcon from '../../assets/icons/waveIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InformationBottomCard from '../informationBottomCard';
import Button from '@mui/material/Button';
import { primaryColor } from '../../utils/colors';
import { InvestmentTypes } from '../../constants/investmentTypes'


interface InvestmentCardProps {
    name: string
    type: number
    address: string
    description: string
    collected: string
    reserved: string
    objective: string
}

const InvestmentCard = ({
    name,
    type,
    address,
    description,
    collected,
    reserved,
    objective }: InvestmentCardProps) => {
    const restaurant = require('../../assets/images/restaurant.jpeg')
    const [selectedIcons, setSelectedIcons] = useState({
        favorite: false,
        share: false,
        notification: false
    })

    return (
        <Container>
            <TopImage src={restaurant} alt='restaurant-1' />
            <WaveContainer>
                <WaveIcon />
            </WaveContainer>
            <IconsContainer>
                <SelfIconContainer
                    onClick={() => setSelectedIcons((actual) => ({ ...actual, favorite: !actual.favorite }))}
                    selected={selectedIcons.favorite}>
                    <FavoriteIcon />
                </SelfIconContainer>
                <SelfIconContainer
                    onClick={() => setSelectedIcons((actual) => ({ ...actual, share: !actual.share }))}
                    selected={selectedIcons.share}>
                    <ShareIcon />
                </SelfIconContainer>
                <SelfIconContainer
                    onClick={() => setSelectedIcons((actual) => ({ ...actual, notification: !actual.notification }))}
                    selected={selectedIcons.notification}>
                    <NotificationsIcon />
                </SelfIconContainer>
            </IconsContainer>
            <BottomCardContainer>
                <CardInformationContainer>
                    <CardBusinessName>{name}</CardBusinessName>
                    <CardBusinessType>{InvestmentTypes[type]}</CardBusinessType>
                    <CardBusinessAddress>{address}</CardBusinessAddress>
                </CardInformationContainer>
                <CardBusinessDescription>
                    {description}
                </CardBusinessDescription>
                <InformationSquaresContainer>
                    <InformationBottomCard title='Captado' number={collected} />
                    <InformationBottomCard title='Reservado' number={reserved} />
                    <InformationBottomCard title='Objetivo' number={objective} />
                </InformationSquaresContainer>
                <Button style={{ background: primaryColor, width: '100%', marginTop: '15px' }} variant="contained">Detalhes</Button>
            </BottomCardContainer>
        </Container>
    );
}

export default InvestmentCard;