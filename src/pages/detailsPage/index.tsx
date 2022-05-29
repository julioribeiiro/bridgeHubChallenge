import React, { useEffect, useState } from 'react';
import FullDetails from '../../components/fullDetails';
import { DetailsContainer, MainContainer, MenuButton } from './styles';
import { useParams } from 'react-router-dom'
import { InvestmentProps, investmentsList } from '../../constants/availableInvestments';
import { BoldText } from '../../components/fullDetails/styles';

const DetailsPage: React.FC = () => {

    const [selectedMenu, setSelectedMenu] = useState('Setores')
    const [investment, setInvestment] = useState<InvestmentProps>()

    const { id } = useParams()

    useEffect(() => {
        setInvestment(investmentsList.filter((item) => item.id === Number(id))[0])
    }, [id])

    const loadSelectedMenu = () => {
        switch (selectedMenu) {
            case 'Setores':
                return investment?.sectors
            case 'Sociedade':
                return investment?.society
            case 'Maturidade':
                return investment?.maturity
            case 'Indicadores':
                return investment?.indicator
            case 'Documentos':
                return investment?.documents
            default:
                return ''
        }
    }

    return (
        <MainContainer>
            <DetailsContainer type={investment?.type ? investment?.type : 0}>
                <FullDetails investment={investment} />
            </DetailsContainer>
            <div style={{ borderTop: '1px solid #c4c4c4', margin: '30px 0', padding: '0 30px', width: '90%' }}>
                <div style={{ width: 'max-content', borderBottom: '1px solid #c4c4c4', padding: '15px 0 0 0', display: 'flex', justifyContent: 'flex-start', background: 'white' }} >
                    <MenuButton
                        variant='text'
                        onClick={() => setSelectedMenu('Setores')}
                        selected={selectedMenu === 'Setores'}>
                        Setores
                    </MenuButton>
                    <MenuButton
                        variant='text'
                        onClick={() => setSelectedMenu('Sociedade')}
                        selected={selectedMenu === 'Sociedade'}>
                        Sociedade
                    </MenuButton>
                    <MenuButton
                        variant='text'
                        onClick={() => setSelectedMenu('Maturidade')}
                        selected={selectedMenu === 'Maturidade'}>
                        Maturidade
                    </MenuButton>
                    <MenuButton
                        variant='text'
                        onClick={() => setSelectedMenu('Indicadores')}
                        selected={selectedMenu === 'Indicadores'}>
                        Indicadores
                    </MenuButton>
                    <MenuButton
                        variant='text'
                        onClick={() => setSelectedMenu('Documentos')}
                        selected={selectedMenu === 'Documentos'}>
                        Documentos
                    </MenuButton>
                </div>
                <div>
                    <h1><BoldText>{selectedMenu}</BoldText></h1>
                    <h2>
                        {loadSelectedMenu()}
                    </h2>
                </div>
            </div>
        </MainContainer>
    );
}

export default DetailsPage;