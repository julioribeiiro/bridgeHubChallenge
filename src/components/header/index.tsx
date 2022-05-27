import React from 'react';
import {
    Container,
    MenuItemsContainer,
    ImageContainer,
    MenuItems,
    MobileIcon,
    SignUpButton
} from './styles'
import SideMenuIcon from '../../assets/icons/sideMenuIcon'
import { leftSideItems } from '../../constants/navigationItems'

interface HeaderProps {
    toggle: () => void;
}

const Header = ({ toggle }: HeaderProps) => {
    const logo = require('../../assets/images/logo.png')

    return (
        <Container>
            <MenuItemsContainer>
                {leftSideItems.map((menu: any) => (
                    <MenuItems
                        key={menu.label}
                        to={menu.link}
                    >
                        {menu.label}
                    </MenuItems>
                ))}
            </MenuItemsContainer>
            <ImageContainer
                to="/"
            >
                <img
                    alt='logo'
                    src={logo}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </ImageContainer>
            <MenuItemsContainer>
                <MenuItems
                    to='/'
                >
                    Entrar
                </MenuItems>
                <SignUpButton variant="contained">Cadastre-se</SignUpButton>
            </MenuItemsContainer>
            <MobileIcon onClick={toggle}>
                <SideMenuIcon />
            </MobileIcon>
        </Container>
    );
}

export default Header;