import React from 'react';
import { SidebarContainer, Icon, SidebarMenu, SidebarLink } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import { sideMenuItems, LeftSideItemsProps } from '../../constants/navigationItems'
import { SignUpButton } from '../header/styles';
// import { Container } from './styles';

interface SideBarProps {
    isOpen: boolean;
    toggle: () => void;
}

const SideBar = ({ isOpen, toggle }: SideBarProps): JSX.Element => {



    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon fontSize="large" />
            </Icon>
            <SidebarMenu>
                {sideMenuItems.map((item: LeftSideItemsProps) => (
                    <SidebarLink
                        key={item.label}
                        onClick={toggle}
                        to={item.link}
                    >
                        {item.label}
                    </SidebarLink>
                ))}
            </SidebarMenu>
            <SignUpButton variant="contained">Cadastre-se</SignUpButton>
        </SidebarContainer>
    );
}

export default SideBar;