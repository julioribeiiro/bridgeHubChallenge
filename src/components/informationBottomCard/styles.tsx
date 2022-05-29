import styled from 'styled-components'

export const MainContainer = styled.div`
    background: #628AF8; 
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    width: 85px;
    height: 70px;
    border-radius: 4px;
`

export const Title = styled.span`
    margin: 10px 0 0 0;
    font-weight: 300;
    font-size: 12px;
    color: #FFF;
`

export const ContainerInformation = styled.p`
    font-weight: 700;
    font-size: 12px;
    color: ${(props: { disabled?: boolean }) => (props.disabled && props.disabled !== undefined) ? '#aa2424' : '#FFF'};
`