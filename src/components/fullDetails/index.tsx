import React, { useState } from 'react';
import IconInformative from '../iconInformative';

import {
    BottomContainer,
    BottomIconsContaienr,
    InvestmentTitle,
    LeftIconsContainer,
    MainContainer,
    MiddleContainer,
    RightCornerInformation,
    RightCornerInformationText,
    TitleContainer,
    TopInformations,
    TopMainContainer,
    Video,
    VideoContainer,
    BoldText,
    ModalScreen,
    SucessMessageContainer
} from './styles';
import { Button, Checkbox, FormControlLabel, IconButton, Modal, TextField, Alert } from '@mui/material';
import { InvestmentProps } from '../../constants/availableInvestments';
import { InvestmentTypes } from '../../constants/investmentTypes';
import NumberFormat from 'react-number-format'
import { primaryColor } from '../../utils/colors';
import { Close, Favorite } from '@mui/icons-material';

interface FullDetailProps {
    investment?: InvestmentProps
}

const FullDetails = ({ investment }: FullDetailProps) => {

    const [openModal, setOpenModal] = useState(false);
    const [openSucessMessage, setOpenSucessMessage] = useState(false);
    const [investedValue, setInvestedValue] = useState(0)

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleClickInvest = () => {
        setOpenSucessMessage(true)
        setOpenModal(false)
    }

    const rightToLeftFormatter = (value: string, decimal: number): string => {
        if (Number(value) === 0) return ''

        let amount = ''
        if (amount.length > decimal) {
            amount = parseInt(value).toFixed(decimal)
        } else {
            amount = (parseInt(value) / 10 ** decimal).toFixed(decimal)
        }

        return 'R$ ' + String(amount).replace('.', ',')
    }

    return (
        <MainContainer>
            <TopMainContainer>
                <TitleContainer>
                    <InvestmentTitle>{investment?.name}</InvestmentTitle>
                    <Button onClick={handleOpen} variant="outlined">Investir</Button>
                </TitleContainer>
                <TopInformations>
                    <span>Alvo Minimo: <BoldText>R$ {investment?.objective}</BoldText></span>
                    <span>Alvo Máximo: <BoldText>R$ {investment?.maxTarget}</BoldText></span>
                    <span>Valor Mínimo do investimento: <BoldText>R$ {investment?.minimalInvestment}</BoldText></span>
                </TopInformations>
                <MiddleContainer>
                    <LeftIconsContainer>
                        <IconInformative title="Rentabilidade de alvo (TIR)" text={`${investment?.rentability} ao ano`}>
                            <Favorite />
                        </IconInformative>
                        <IconInformative title="Pagamentos Projetados" text={`${investment?.projectedPayments}`}>
                            <Favorite />
                        </IconInformative>
                        <IconInformative title="Modalidade" text={`${investment?.modality}`}>
                            <Favorite />
                        </IconInformative>
                        <IconInformative title="Participação" text={`${investment?.participation}`}>
                            <Favorite />
                        </IconInformative>
                    </LeftIconsContainer>
                    <VideoContainer>
                        <Video src="https://www.youtube.com/embed/_Yhyp-_hX2s" />
                    </VideoContainer>
                </MiddleContainer>
            </TopMainContainer>
            <BottomContainer>
                <BottomIconsContaienr>
                    <IconInformative white title="Oportunidade" text={`${investment?.oportunity}`}>
                        <Favorite />
                    </IconInformative>
                    <IconInformative white title="Setor" text={`${InvestmentTypes[investment?.type ? investment?.type : 0]}`}>
                        <Favorite />
                    </IconInformative>
                    <IconInformative white title="Valor Cota" text={`R$ ${investment?.minimalInvestment}`}>
                        <Favorite />
                    </IconInformative>
                </BottomIconsContaienr>
                <RightCornerInformation>
                    <RightCornerInformationText>
                        <BoldText>{`${investment?.collected}%`}</BoldText> captado
                    </RightCornerInformationText>
                </RightCornerInformation>
            </BottomContainer>
            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <ModalScreen>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', borderBottom: '1px solid #c4c4c4', width: '100%' }}>
                        <h1>
                            <BoldText>Investimento</BoldText>
                        </h1>
                        <h2>
                            Pronto para essa experiência, <BoldText>Igor Lima Rocha Azevedo?</BoldText>
                        </h2>
                    </div>
                    <div style={{ width: '100%' }} >
                        <h5 style={{ margin: '30px 0 10px 0' }}>
                            <BoldText>Valor a ser investido em reais</BoldText>
                        </h5>
                        <p style={{ margin: '5px 0' }}>
                            O valor a ser investido deve ser mútiplo de <BoldText>R$ {investment?.minimalInvestment}</BoldText>
                        </p>
                        <NumberFormat
                            thousandsGroupStyle="thousand"
                            decimalSeparator={','}
                            thousandSeparator={'.'}
                            decimalScale={2}
                            format={(value: string) => rightToLeftFormatter(value, 2)}
                            customInput={TextField}
                            onChange={(e: any) => (setInvestedValue(e.target.value))}
                            value={investedValue}
                            variant="outlined"
                            size="small"
                            placeholder='R$ 500,00'
                        />
                        <div style={{ margin: '10px 0 0 0' }}>
                            <FormControlLabel control={<Checkbox />} value={1} label="Declaro que concordo com o documento de ciência de risco do investimento" />
                        </div>
                        <Button onClick={handleClickInvest} style={{ borderRadius: '10px', background: primaryColor, width: '100%', marginTop: '15px' }} variant="contained">Investir</Button>
                    </div>
                </ModalScreen>
            </Modal>
            <SucessMessageContainer open={openSucessMessage}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenSucessMessage(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Parabéns, agora você é sócio desta empresa!
                </Alert>
            </SucessMessageContainer>
        </MainContainer>
    );
}

export default FullDetails;