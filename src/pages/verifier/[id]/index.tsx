import React, {ReactElement, ReactNode, useEffect, useState} from 'react';
import {LargeVCCard} from '../../../components/cards';
import Layout from '../../../components/layout';
import {Body2, Body3, Body5, Title2} from '../../../utils/typography';
import {BackButton, Button, Loader} from '../../../components/elements';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {
    GetUserVCsVerifierDocument,
    useGetVcLazyQuery,
    useVerifyVcMutation
} from '../../../generated/graphql';
import {formatDate, startAndEnd} from '../../../utils/misc';
import {useMyDidStore} from '../../../store/store';
import {useModal} from '../../../components/hooks/useModal';
import {Modal} from '../../../components/elements/Modal';

type StatusType = {
    status: string;
}

export default function RequestPage(): ReactNode {
    const {isShown, toggle} = useModal();
    const [verifyVC] = useVerifyVcMutation({
        onCompleted: () => {
            toggle();
            setVerified(true);
        },
        update(cache, {data: setVerifyVc}) {
            cache.modify({
                fields: {
                    getUserVCs(Vcs = []) {
                        const newVcs = cache.writeQuery({
                            query: GetUserVCsVerifierDocument,
                            data: setVerifyVc
                        });
                        return [...Vcs, newVcs];
                    }
                }
            });
        }
    });
    const router = useRouter();
    const [modalText, setModalText] = useState<string>();
    const [verified, setVerified] = useState<boolean>(false);
    const [getVC, {data, loading}] = useGetVcLazyQuery();
    const {myDid} = useMyDidStore();

    useEffect(() => {
        if (router.query.id) {
            getVC({variables: {vcDid: router.query.id.toString()}});
        }
    }, [router.query.id]);

    function verifierVc(status: string, did: string) {
        verifyVC({variables: {verificationStatus: status, vcDid: did}});
        setModalText(status);
    }

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
                            <Status status={data.getVC.verificationCases[0].verificationStatus}>{data.getVC.verificationCases[0].verificationStatus}</Status>
                        </StatusCard>
                        <LargeVCCard
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
                        {data.getVC.verificationCases[0].verifierDid === myDid && data.getVC.verificationCases[0].verificationStatus === 'PENDING_VERIFY' && !verified
                            ? <>
                                <ButtonWrapper onClick={() => verifierVc('ACCEPTED', data.getVC.vcDid)}>
                                    <Button>Accept</Button>
                                </ButtonWrapper>
                                <ButtonWrapper onClick={() => verifierVc('REJECTED', data.getVC.vcDid)}>
                                    <Button>Reject</Button>
                                </ButtonWrapper>
                            </> : <></>
                        }
                    </> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Body5 margin="100px 0 80px">You do not have permission to view this DID.</Body5>
                    </div>
                    }
                    <Modal modalTitle={`VC has been ${modalText}`} isShown={isShown} hide={toggle}/>
                </>
            }
        </>
    );
}

const StatusCard = styled.div`
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

const Status = styled(Body3)<StatusType>`
  color: ${(props) => props.status === 'REJECTED' ? '#FF0000 !important' : props.status === 'ACCEPTED' ? '#7EF606 !important' : '#999999 !important'};
`;

const ButtonWrapper = styled.div`
  width: 60%;
  margin: 30px auto 0;
  
  &:nth-of-type(2) {
    margin: 60px auto 0;
  }
`;

RequestPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
