import React, {ReactElement, ReactNode} from 'react';
import {SmallVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body2, Body4, Title2} from '../../../utils/typography';
import styled from 'styled-components';
import Link from 'next/link';
import {AgentsRoles, useGetUserVCsHolderQuery} from '../../../generated/graphql';
import {BackButton, Button, Loader} from '../../../components/elements';

export default function FlatQubeServicePage(): ReactNode {
    const {data, loading} = useGetUserVCsHolderQuery({variables: {role: AgentsRoles.Holder}});

    return (
        <>
            <BackButton/>
            <Title2>FlatQube</Title2>
            <Body2 margin="30px 0">Leading DeFi platform for Everscale. DEX, liquidity and farming pools - all within one platform.</Body2>
            {loading ? <Loader/>
                : <VCCards>
                    {data && data.getUserVCs.length > 0
                        ? <>
                            {data.getUserVCs.map((vc, index) => (
                                <SmallVCCard key={index} verificationStatus={vc.verificationCases[0] && vc.verificationCases[0].verificationStatus} title={vc.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' ? 'State ID' : vc.vcTypeDid === 'did:ever:proof-of-residency-jd4345hwd8383d33d' ? 'Proof of Residency' : 'VC Wallet'} status="Active" did={vc.vcDid} img="/assets/everscale-land-logo.svg" sendToVerifier={true}/>
                            ))}
                        </>
                        : <NoVCs>
                            <Body4 fontWeight="700" margin="0 0 40px">You do not have Verifiable Credentials yet.<br/>
                                Go to marketplace to claim your first one!</Body4>
                            <Link href="/marketplace">
                                <a>
                                    <Button>Go to marketplace </Button>
                                </a>
                            </Link>
                        </NoVCs>
                    }
                </VCCards>
            }
        </>
    );
}

const VCCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0;
  width: 100%;
  margin-top: 40px;

  @media(min-width: 1400px) {
    gap: 25px 0;
  }
`;

const NoVCs = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 50px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  a {
    width: 100%;
  }
`;

FlatQubeServicePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
