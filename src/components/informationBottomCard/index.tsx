import React from 'react';
import { Title, MainContainer, ContainerInformation } from './styles';

interface InformationBottomCardProps {
    title: string
    number: string
}

const InformationBottomCard = ({ title, number }: InformationBottomCardProps): JSX.Element => {
    return (
        <MainContainer>
            <Title>{title}</Title>
            <ContainerInformation>{number}</ContainerInformation>
        </MainContainer>
    );
}

export default InformationBottomCard;