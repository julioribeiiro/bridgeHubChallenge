import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import { Link } from 'react-router-dom'

interface SidebarContainerProps {
    isOpen: boolean;
}

const SidebarContainer = styled.aside`
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${(props: SidebarContainerProps) => (props.isOpen ? '100%' : '0')};
    right: ${(props: SidebarContainerProps) => (props.isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`;

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${primaryColor};
        transition: 0.2 ease-in-out;
    }
`;

export { SidebarContainer, Icon, SidebarLink, SidebarMenu };
