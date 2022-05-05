import React, {ReactElement, ReactNode, useEffect} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body2, Title2, Body5} from '../../../utils/typography';
import {BackButton, Loader} from '../../../components/elements';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useGetVcLazyQuery} from '../../../generated/graphql';
import {formatDate, startAndEnd} from '../../../utils/misc';

export default function IssuerVCPage(): ReactNode {

    const router = useRouter();
    const [getVC, {data, loading}] = useGetVcLazyQuery();

    useEffect(() => {
        if (router.query.id) {
            getVC({variables: {vcDid: router.query.id.toString()}});
        }
    }, [router.query.id]);

    return (
        <>
            {loading ? <Loader/>
                : <>
                    {data ? <>
                        <BackButton/>
                        <Title2 margin="0 0 30px">{data.getVC.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' ? 'State ID/did:ever:stat...7hdh3h455t' : data.getVC.vcTypeDid === 'did:ever:proof-of-residency-jd4345hwd8383d33d' ? 'Proof of Residency/did:ever:...d8383d33d' : 'VC'}</Title2>
                        <Body2 style={{textDecoration: 'underline'}}>Holder/{startAndEnd(data.getVC.holderDid, 12)}</Body2>
                        <StatusCard>
                            <Date>{formatDate(data.getVC.updatedAt)}</Date>
                        </StatusCard>
                        {data.getVC.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' && <LargeVCCard
                            citizenship={JSON.parse(data.getVC.vcParams).citizenship}
                            did={data.getVC.vcDid}
                            status="Active"
                            issued={JSON.parse(data.getVC.vcParams).dateOfIssuance}
                            img="/assets/everscale-land-logo.svg"
                            firstName={JSON.parse(data.getVC.vcParams).firstName}
                            lastName={JSON.parse(data.getVC.vcParams).lastName}
                            dateOfBirth={JSON.parse(data.getVC.vcParams).dateOfBirth}
                            dateOfExpiry={JSON.parse(data.getVC.vcParams).dateOfExpiry}
                            id={JSON.parse(data.getVC.vcParams).id}
                            rawData={data.getVC.vcRawText}/>
                        }
                        {data.getVC.vcTypeDid === 'did:ever:proof-of-residency-jd4345hwd8383d33d' &&
                        <LargeVCCard
                            did={data.getVC.vcDid}
                            status="Active"
                            img="/assets/everscale-land-logo.svg"
                            country={JSON.parse(data.getVC.vcParams).country}
                            city={JSON.parse(data.getVC.vcParams).city}
                            address={JSON.parse(data.getVC.vcParams).address}
                            rawData={data.getVC.vcRawText}/>
                        }
                    </> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Body5 margin="100px 0 80px">You do not have permission to this DID.</Body5>
                    </div>
                    }
                </>
            }
        </>
    );
}

const StatusCard = styled(Body2)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  background: #292E5B;
  border: 2px solid #3F91E9;
  border-radius: 8px;
  margin: 20px 0 12px;
  padding: 10px 15px;
`;

const Date = styled(Body2)`
  color: #FFFFFF;
`;


IssuerVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
