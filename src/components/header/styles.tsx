import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        cursor: pointer;
        align-items: center;
        position: absolute;
        right: 15px;
        top: 20px;
    }
`;

const MenuItemsContainer = styled.ul`
    display: flex;
    padding-left: 0;
    margin: 0 50px;
    align-items: center;
    width: auto;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const MenuItems = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    border-bottom: 2px solid rgba(0, 124, 184, 0);
    transition: 300ms;
    margin: 0 10px;
    color: #121212;
    text-decoration: none;

    &:active {
        border-bottom-color: rgba(0, 124, 184, 1);
    }

    &:hover {
        border-bottom-color: rgba(0, 124, 184, 1);
    }
`;

const SignUpButton = styled(Button)`
    height: max-content;
    padding: 15px !important;
    font-family: 'Lexend', sans-serif !important;
    font-weight: 500 !important;
    text-transform: none !important;
`

const ImageContainer = styled(Link)`
    width: 256px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    cursor: pointer;

    font-size: large;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        height: 36px;
        width: 171px;
    }
`;

export { Container, MenuItemsContainer, ImageContainer, MenuItems, MobileIcon, SignUpButton };
