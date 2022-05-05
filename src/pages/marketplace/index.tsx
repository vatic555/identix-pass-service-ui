import React, {ReactNode, ReactElement} from 'react';
import Layout from '../../components/layout';
import {Body4, Title2} from '../../utils/typography';
import styled from 'styled-components';

export default function MarketplacePage(): ReactNode {
    return (
        <>
            <Title2>Marketplace</Title2>
            <NoMarket>
                <Body4 fontWeight="700" textAlign="center" margin="0 0 40px">Here you will find the list of Issuers and their Verifiable Credentials.<br/> As SSI adoption grows, you will see many familiar services here (DeFI platforms, online schools, banks, ticket providers, etc).</Body4>
            </NoMarket>
        </>
    );
}

const NoMarket = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

MarketplacePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
