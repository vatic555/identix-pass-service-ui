import React, {ReactElement, ReactNode} from 'react';
import Layout from '../../components/layout';
import {Body2, Body5, Title2} from '../../utils/typography';
import {VerificationRequestsTable} from '../../components/tables';
import {AgentsRoles, useGetUserVCsVerifierQuery} from '../../generated/graphql';
import {Loader} from '../../components/elements';

export default function VerifierPage(): ReactNode {

    const {data, loading} = useGetUserVCsVerifierQuery({variables: {role: AgentsRoles.Verifier}});

    return (
        <>
            <Title2>Verification requests</Title2>
            <Body2 margin="30px 0 40px">Here are the verification requests sent to your DID. Select a request in the table and process it by accepting or rejecting the verifiable credential.</Body2>
            {loading ? <Loader/>
                : <>{data ? <VerificationRequestsTable data={data}/> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Body5 margin="100px 0 80px">Nothing here yet.</Body5>
                </div>}</>
            }
        </>
    );
}

VerifierPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
