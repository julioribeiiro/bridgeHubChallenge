import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, IconButton, InputBase, Pagination, Paper, Slider } from '@mui/material';
import InvestmentCard from '../../components/investmentCard';
import { investmentsList, InvestmentProps } from '../../constants/availableInvestments';
import { WrapperContainer, InvestmentsWrapper, InvestmentCardsContainer, MainContainer, PageTitle, BottomContainer, FiltersContainer, FilterTitle, FilterSubTitle } from './styles';
import SearchIcon from '@mui/icons-material/Search'

const InvestmentsPage: React.FC = () => {

    const [filteredInvestmentsList, setFilteredInvestmentsList] = useState<InvestmentProps[]>(investmentsList)
    const [showingInvestments, setShowingInvestments] = useState<InvestmentProps[]>(investmentsList.slice(0, 8))
    const [actualPage, setActualPage] = useState(1)
    const [objectiveFilter, setObjectiveFilter] = useState(100)
    const [searchInvestment, setSearchInvestment] = useState('')
    const [investmentTypes, setInvestmentTypes] = useState<number[]>([])

    const [filterBy, setFilterBy] = useState<{
        type: number[]
        objMax: number
    }>({
        type: [],
        objMax: 100
    })

    useEffect(() => {
        setShowingInvestments(filteredInvestmentsList.slice((actualPage - 1) * 8, ((actualPage - 1) * 8) + 8))
    }, [filteredInvestmentsList, actualPage])

    useEffect(() => {
        let newInvestmentsList = investmentsList.filter((item) => Number(item.objective.split('M')[0]) < objectiveFilter)
        setActualPage(1)
        if (investmentTypes.length === 0) setFilteredInvestmentsList(newInvestmentsList)
        else setFilteredInvestmentsList(newInvestmentsList.filter((item) => investmentTypes.includes(item.type)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterBy])

    useEffect(() => {
        setFilterBy({ type: investmentTypes, objMax: objectiveFilter })
    }, [objectiveFilter, investmentTypes])

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (searchInvestment === '') setFilteredInvestmentsList(investmentsList)
        else setFilteredInvestmentsList(filteredInvestmentsList.filter((item) => item.name.toLocaleLowerCase() === searchInvestment.toLocaleLowerCase().trim()))
    }

    const handleCheckboxSelection = (type: number, checked: boolean) => {
        if (checked) {
            setInvestmentTypes((prev) => [...prev, Number(type)])
        } else {
            setInvestmentTypes((prev) => prev.filter((item) => item !== Number(type)))
        }
    }

    return (
        <MainContainer>
            <div>
                <PageTitle>Lista de Investimentos</PageTitle>
                <BottomContainer>
                    <FiltersContainer>
                        <Paper
                            component="form"
                            style={{ padding: '2px 4px', display: 'flex', alignItems: 'center', margin: '0 15px 0 0' }}
                            onSubmit={handleSubmit}
                        >
                            <InputBase
                                style={{ marginLeft: '10px', flex: 1 }}
                                placeholder="Buscar"
                                onChange={(e: any) => setSearchInvestment(e.target.value)}
                            />
                            <IconButton type="submit" style={{ padding: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <FilterTitle>Filtros</FilterTitle>
                        <FilterSubTitle>Tipos de Empresa</FilterSubTitle>
                        <FormGroup onChange={(e: any) => handleCheckboxSelection(e.target.value, e.target.checked)}>
                            <FormControlLabel control={<Checkbox />} value={0} label="Bares e Restaurantes" />
                            <FormControlLabel control={<Checkbox />} value={1} label="Tecnologia da informação" />
                            <FormControlLabel control={<Checkbox />} value={2} label="Vestuário e calçados" />
                        </FormGroup>
                        <FilterSubTitle>Objetivo máximo</FilterSubTitle>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ margin: '0 10px 0 0' }}>0</span>
                            <Slider
                                defaultValue={100}
                                step={5}
                                aria-label="Objective"
                                valueLabelDisplay="auto"
                                value={objectiveFilter}
                                onChange={(e, value) => setObjectiveFilter(Number(value))} />
                            <span style={{ margin: '0 10px' }}>100MM</span>
                        </div>
                    </FiltersContainer>
                    <WrapperContainer >
                        {filteredInvestmentsList.length > 0 ?
                            <>
                                <InvestmentsWrapper>
                                    {showingInvestments.map((investment: InvestmentProps, index) => (
                                        <InvestmentCardsContainer
                                            key={index}
                                        >
                                            <InvestmentCard id={investment.id} />
                                        </InvestmentCardsContainer>
                                    ))}
                                </InvestmentsWrapper>
                                <Pagination
                                    onChange={(e, value) => setActualPage(value)}
                                    count={Math.ceil(filteredInvestmentsList.length / 8)}
                                    shape="rounded"
                                    size='small'
                                    style={{ margin: '20px 0 100px 0' }} />
                            </> : 'Não há resultado para esse filtro.'
                        }
                    </WrapperContainer>
                </BottomContainer>
            </div>
        </MainContainer>
    );
}

export default InvestmentsPage;