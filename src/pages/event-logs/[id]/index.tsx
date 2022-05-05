import React, {ReactElement, ReactNode, useEffect} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body5, Title2} from '../../../utils/typography';
import {BackButton, Loader} from '../../../components/elements';
import {useRouter} from 'next/router';
import {useGetVcLazyQuery} from '../../../generated/graphql';

export default function EventLogCardPage(): ReactNode {
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
                        <Title2
                            margin="0 0 40px">{data.getVC.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' ? 'State ID' : data.getVC.vcTypeDid === 'did:ever:proof-of-residency-jd4345hwd8383d33d' ? 'Proof of Residency' : 'VC Wallet'}</Title2>
                        {data.getVC.vcTypeDid === 'did:ever:state-id-fd5das7hdh3h455t' &&
                        <LargeVCCard citizenship={JSON.parse(data.getVC.vcParams).citizenship} did={data.getVC.vcDid}
                            issued={JSON.parse(data.getVC.vcParams).dateOfIssuance} status="Active"
                            img="/assets/everscale-land-logo.svg"
                            firstName={JSON.parse(data.getVC.vcParams).firstName}
                            lastName={JSON.parse(data.getVC.vcParams).lastName}
                            dateOfBirth={JSON.parse(data.getVC.vcParams).dateOfBirth}
                            dateOfExpiry={JSON.parse(data.getVC.vcParams).dateOfExpiry}
                            id={JSON.parse(data.getVC.vcParams).id} rawData={data.getVC.vcRawText}/>
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
                    </> : <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Body5 margin="100px 0 80px">You do not have permission to this DID.</Body5>
                    </div>
                    }
                </>
            }
        </>
    );
}

EventLogCardPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
