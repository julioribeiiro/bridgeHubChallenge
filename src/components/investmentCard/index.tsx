import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom'
import { InvestmentProps, investmentsList } from '../../constants/availableInvestments';


interface InvestmentCardProps {
    id: number
}

const InvestmentCard = ({ id }: InvestmentCardProps) => {

    const [investment, setInvestment] = useState<InvestmentProps>()

    useEffect(() => {
        setInvestment(investmentsList.filter((item) => item.id === id)[0])
    }, [id])

    const navigate = useNavigate()

    const [selectedIcons, setSelectedIcons] = useState({
        favorite: false,
        share: false,
        notification: false
    })

    const handleClickDetails = (e: any) => {
        e.preventDefault()
        navigate(`/details/${id}`)
    }

    return (
        <Container>
            <TopImage src={investment?.image} alt='image' />
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
                    <CardBusinessName>{investment?.name}</CardBusinessName>
                    <CardBusinessType>{InvestmentTypes[investment?.type ? investment?.type : 0]}</CardBusinessType>
                    <CardBusinessAddress>{investment?.address}</CardBusinessAddress>
                </CardInformationContainer>
                <CardBusinessDescription>
                    {investment?.description}
                </CardBusinessDescription>
                <InformationSquaresContainer>
                    <InformationBottomCard title='Captado' number={investment?.collected ? investment?.collected : ''} />
                    <InformationBottomCard title='Reservado' number={investment?.reserved ? investment?.reserved : ''} />
                    <InformationBottomCard disabled title='Objetivo' number={investment?.objective ? investment?.objective : ''} />
                </InformationSquaresContainer>
                <Button onClick={handleClickDetails} style={{ borderRadius: '20px', background: primaryColor, width: '100%', marginTop: '15px' }} variant="contained">Detalhes</Button>
            </BottomCardContainer>
        </Container>
    );
}

export default InvestmentCard;