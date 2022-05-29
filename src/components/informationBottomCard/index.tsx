import React from 'react';
import { Title, MainContainer, ContainerInformation } from './styles';

interface InformationBottomCardProps {
    title: string
    number: string
    disabled?: boolean
}

const InformationBottomCard = ({ title, number, disabled }: InformationBottomCardProps): JSX.Element => {
    return (
        <MainContainer>
            <Title>{title}</Title>
            <ContainerInformation disabled={disabled}>{number}</ContainerInformation>
        </MainContainer>
    );
}

export default InformationBottomCard;