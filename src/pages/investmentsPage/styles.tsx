import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
`

export const PageTitle = styled.h1`
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    padding: 0 0 10px 15px;
    border-bottom: 1px solid #c4c4c4;
`

export const InvestmentsWrapper = styled.div`
    max-width: 1700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px;
    z-index: 3;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 10px;
    }
`;

export const InvestmentCardsContainer = styled.div`
    overflow-x: hidden;
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

export const BottomContainer = styled.div`
    display: flex;
    width: 99%;
    margin:0 0 0 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0;
    }
`

export const WrapperContainer = styled.div`
    margin: 0 0 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FiltersContainer = styled.div`
    width: 300px;
    height: auto;

    @media screen and (max-width: 768px) {
        margin-bottom: 25px;
        border-bottom: 1px solid #c4c4c4;
    }
`

export const FilterTitle = styled.h3`
    font-size: 18px;
`

export const FilterSubTitle = styled.h4`
    font-size: 14px;
    color: #000;
    font-weight: 600;
    margin: 20px 0 0 0;
`

