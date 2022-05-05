import React, {ReactNode, ReactElement} from 'react';
import {IssueAVCTable} from '../../components/tables';
import Layout from '../../components/layout';
import {Body2, Body5, Title2} from '../../utils/typography';
import {Button, Loader} from '../../components/elements';
import styled from 'styled-components';
import Link from 'next/link';
import {AgentsRoles, useGetUserVCsIssuerQuery} from '../../generated/graphql';

export default function IssueAVCPage(): ReactNode {
    const {data, loading} = useGetUserVCsIssuerQuery({variables: {role: AgentsRoles.Issuer}});

    return (
        <>
            <>
                <Title2>Issue a VC</Title2>
                <Body2 margin="30px 0 40px">In this section you can issue a new VC. You can also see the VC issuance history table below.</Body2>
                {loading ? <Loader/>
                    : <>{data ? <IssueAVCTable data={data}/> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Body5 margin="100px 0 80px">Nothing here yet.</Body5>
                    </div>}</>
                }
            </>
            <ButtonWrapper>
                <Link href="/issue-a-vc/new">
                    <a>
                        <Button>
                            Issue a new VC
                        </Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </>
    );
}

const ButtonWrapper = styled.div`
  width: 50%;
  margin-top: 80px;
`;

IssueAVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
