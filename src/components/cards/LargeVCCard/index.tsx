import React from 'react';
import styled from 'styled-components';
import {Title3, Body1, Body2, Body5, Label2, TextGradient} from '../../../utils/typography';
import Image from 'next/image';
import {LargeVCCardProps, Status} from './LargeVCCard.props';
import {RawDataModal} from '../../elements/RawDataModal';
import {useModal} from '../../hooks/useModal';
import {formatDate, startAndEnd} from '../../../utils/misc';

export const LargeVCCard = ({citizenship, did, status, issued, img, firstName, lastName, dateOfBirth, dateOfExpiry, id, rawData, country, city, address}: LargeVCCardProps): JSX.Element => {
    const {isShown, toggle} = useModal();

    function getJSON(json: string) {
        return JSON.stringify(JSON.parse(json), undefined, 2);
    }

    return (<>
        <Card status={status}>
            <TopInfo>
                <Image src={img} width="92" height="92"/>
                <MainInfo>
                    <Title3 fontWeight="700" color="black" margin="3px 0 0">Everscale.Land</Title3>
                    <TextGradient fontSize="16px" color="black">{startAndEnd(did, 15)}</TextGradient>
                    {!city && !country && !address && <Body1 color="black" margin="16px 0 0"><strong>Issued:</strong> {formatDate(issued!)}</Body1>}
                </MainInfo>
            </TopInfo>
            <BottomInfo>
                <Column>
                    {firstName && <ColItem>
                        <Label2 color="#9E9E9E">Name</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{firstName}</Body1>
                    </ColItem>}
                    {lastName && <ColItem>
                        <Label2 color="#9E9E9E">Last Name</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{lastName}</Body1>
                    </ColItem>}
                    {country && <ColItem>
                        <Label2 color="#9E9E9E">Country</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{country}</Body1>
                    </ColItem>}
                </Column>
                <Column>
                    {citizenship && <ColItem>
                        <Label2 color="#9E9E9E">Citizenship</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{citizenship}</Body1>
                    </ColItem>}
                    {dateOfBirth && <ColItem>
                        <Label2 color="#9E9E9E">Date of birth</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{formatDate(dateOfBirth!)}</Body1>
                    </ColItem>}
                    {city && <ColItem>
                        <Label2 color="#9E9E9E">City</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{city}</Body1>
                    </ColItem>}
                </Column>
                <Column>
                    {id && <ColItem>
                        <Label2 color="#9E9E9E">ID</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{id}</Body1>
                    </ColItem>}
                    {issued && <ColItem>
                        <Label2 color="#9E9E9E">Date of issuance</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{formatDate(issued!)}</Body1>
                    </ColItem>}
                    {dateOfExpiry && <ColItem>
                        <Label2 color="#9E9E9E">Date of expiry</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{formatDate(dateOfExpiry!)}</Body1>
                    </ColItem>}
                    {address && <ColItem>
                        <Label2 color="#9E9E9E">Address</Label2>
                        <Body1 color="black" fontWeight="700" margin="0">{address}</Body1>
                    </ColItem>}
                </Column>
            </BottomInfo>
            <TopRightLabel status={status}>
                <Body5 fontWeight="700">{status}</Body5>
            </TopRightLabel>
            <BottomLeftLabel status={status}>
                <Body2 fontWeight="700">VC DID: {startAndEnd(did, 12)}</Body2>
            </BottomLeftLabel>
            <RawData onClick={toggle}>
                Raw data
            </RawData>
        </Card>
        {rawData && <RawDataModal headerText="Raw Data" isShown={isShown} hide={toggle} modalContent={getJSON(rawData)}/>}
    </>
    );
};

const Card = styled.div<Status>`
  position: relative;
  width: 100%;
  height: 400px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7));
  border-radius: 8px;
  border: ${(props) => props.status ? '4px solid #3fd0e9' : '4px solid #74ACC9'};
  padding: 22px;

  @media(min-width: 1400px) {
    height: 420px;
  }
`;

const TopInfo = styled.div`
  position: relative;
  display: flex;
  padding: 0 0 28px 30px;
`;

const MainInfo = styled.div`
  padding-left: 65px;
`;

const BottomInfo = styled.div`
  position: relative;
  display: flex;
  padding: 28px 0 30px 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    background: url('/assets/gradient-line.svg') center/cover no-repeat;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 118px;
`;

const ColItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRightLabel = styled.div<Status>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${(props) => props.status === 'Review' ? '-3px' : '-2px'};
  right: ${(props) => props.status === 'Review' ? '-6px' : '-2px'};
  width: ${(props) => props.status === 'Review' ? '182px' : '192px'};
  height: 56px;
  padding-left: 29px;
  padding-bottom: 2px;
  background: ${(props) => props.status === 'Review' ? 'url(\'/assets/card-label-right-review.svg\') center/contain no-repeat' : 'url(\'/assets/card-label-right-lg.svg\') center/contain no-repeat'};
`;

const BottomLeftLabel = styled.div<Status>`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: ${(props) => props.status === 'Review' ? '-1px' : '-2px'};
  left: -1px;
  width: 400px;
  height: 55px;
  padding-left: 18px;
  background: ${(props) => props.status === 'Review' ? 'url(\'/assets/card-label-left-lg-review.svg\') center/contain no-repeat' : 'url(\'/assets/card-label-left-lg.svg\') center/contain no-repeat'};
`;

const RawData = styled.div`
  position: absolute;
  right: 35px;
  bottom: 45px;
  color: black;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`;
