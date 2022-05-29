import React from 'react';

import { MainContainer, IconContainer, InformationsContainer, InformationTitle, InformationBottom } from './styles';

interface IconInformativeProps {
    title: string
    text: string
    children: any
    white?: boolean
}

const IconInformative = ({ title, text, children, white }: IconInformativeProps) => {
    return (
        <MainContainer>
            <IconContainer>
                {children}
            </IconContainer>
            <InformationsContainer>
                <InformationTitle white={white}>{title}</InformationTitle>
                <InformationBottom white={white}>{text}</InformationBottom>
            </InformationsContainer>
        </MainContainer>
    );
}

export default IconInformative;