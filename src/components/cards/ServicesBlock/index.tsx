import React from 'react';
import styled from 'styled-components';
import {Title3} from '../../../utils/typography';
import Image from 'next/image';
import Link from 'next/link';
import {ServicesBlockProps} from './ServicesBlock.props';

const Service = ({image, url}: ServicesBlockProps): JSX.Element => {
    return (
        <ServiceBlock>
            <Link href={url}>
                <a>
                    <Image src={image} width="180" height="120"/>
                </a>
            </Link>
        </ServiceBlock>
    );
};

export const ServicesBlock = (): JSX.Element => {
    return (
        <div>
            <Title3 margin="80px 0 20px">Services</Title3>
            <ServicesRow>
                <Service image="/assets/flatqube-services.png" url="/services/flatqube"/>
                <Service image="/assets/octus-bridge-services.png" url="/services/flatqube"/>
                <Service image="/assets/grandbazar-services.png" url="/services/flatqube"/>
                <Service image="/assets/hsbc-services.png" url="/services/flatqube"/>
            </ServicesRow>
        </div>
    );
};

const ServicesRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 20px;
`;

const ServiceBlock = styled.div`
  filter: drop-shadow(0px 4px 12px rgba(10, 51, 57, 0.51));
  transition: all .2s;
  
  &:hover {
    transform: scale(0.99);
    filter: drop-shadow(0px 4px 12px rgba(10, 51, 57, 1));
  }
`;
