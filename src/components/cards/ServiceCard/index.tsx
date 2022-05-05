import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Title3, Body2} from '../../../utils/typography';
import {DisabledProps, ServiceCardProps} from './ServiceCard.props';

export const ServiceCard = ({title, description, img, disabled}: ServiceCardProps): JSX.Element => {
    return (
        <Card disabled={disabled}>
            <ImgWrapper>
                <Image src={img} layout="fill" objectFit="contain"/>
            </ImgWrapper>
            <div style={{flex: '1 1 auto'}}>
                <Title3 color={disabled ? '#FFFFFF' : 'black'} margin="0">{title}</Title3>
                <Body2 color={disabled ? '#FFFFFF' : 'black'} margin="10px 0">{description}</Body2>
            </div>
            <BottomRightLabel disabled={disabled}/>
        </Card>
    );
};

const Card = styled.div<DisabledProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 180px;
  background: ${(props) => props.disabled ? 'linear-gradient(122.69deg, rgba(255, 255, 255, 0.13) 20.28%, rgba(255, 255, 255, 0.0871) 93.92%)' : '#FFFFFF'};
  filter: ${(props) => props.disabled ? 'none' : 'drop-shadow(0px 4px 12px rgba(2, 32, 37, 0.7))'};
  border-radius: 10px;
  border: ${(props) => props.disabled ? 'default' : '2px solid #3fd0e9'};
  padding: 25px;
  margin-top: 25px;
  transition: all .2s;
  cursor: ${(props) => props.disabled ? 'default' : 'pointer'};

  &:hover {
    pointer-events: ${(props) => props.disabled ? 'none' : 'default'};
    filter: ${(props) => props.disabled ? 'none' : 'drop-shadow(0px 4px 12px rgb(5, 5, 5))'};
    transform: ${(props) => props.disabled ? 'unset' : 'scale(0.99)'};
  }
  
  &::after {
    display: ${(props) => props.disabled ? 'block' : 'none'};
    content: '';
    position: absolute;
    top: 18px;
    right: 18px;
    width: 27px;
    height: 36px;
    background: url('/assets/locked.svg') center/contain no-repeat;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 184px;
  height: 100%;
  margin-right: 25px;
  flex: 1 0 auto;
`;

const BottomRightLabel = styled.div<DisabledProps>`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -1px;
  right: -1px;
  width: 320px;
  height: 32px;
  padding-left: 18px;
  background: ${(props) => props.disabled ? 'url(\'/assets/card-label-right-bottom-lg-light.svg\') center/contain no-repeat' : 'url(\'/assets/card-label-right-bottom-lg.svg\') center/contain no-repeat'};
`;
