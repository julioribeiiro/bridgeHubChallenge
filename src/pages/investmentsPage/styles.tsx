import styled from 'styled-components';

const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    z-index: 3;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    height: 500px;
    width: 304px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`;

const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`;

const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export { ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP };
