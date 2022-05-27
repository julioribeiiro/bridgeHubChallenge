import React from 'react';
import InvestmentCard from '../../components/investmentCard';
import { investmentsList } from '../../constants/availableInvestments';
import { ServicesWrapper, ServicesCard } from './styles';

// import { Container } from './styles';

const InvestmentsPage: React.FC = () => {
    return (
        <ServicesWrapper>
            {investmentsList.map((service) => (
                <ServicesCard
                    key={service.name}
                // to={service.component}
                >
                    <InvestmentCard
                        name={service.name}
                        type={service.type}
                        address={service.address}
                        description={service.description}
                        collected={service.collected}
                        reserved={service.reserved}
                        objective={service.objective} />
                </ServicesCard>
            ))}
        </ServicesWrapper>
    );
}

export default InvestmentsPage;