import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Body1} from '../../../utils/typography';
import Image from 'next/image';
import {ButtonGradient, ButtonTransparent} from '../../elements';
import {
    extractTokenFromUrl,
    generateAfterWeb2OutServisesUserLogin,
    generateSSORedirectUrl,
    redirect,
    setAuthorizationToken
} from '../../../utils/misc';
import {useRouter} from 'next/router';
import {FlatQubeAuthorizationToken} from '../../../constants';

export const LogIn: FC = () => {

    const router = useRouter();
    const redirectUrl = generateSSORedirectUrl();

    useEffect(() => {
        const urlAfterLogin = generateAfterWeb2OutServisesUserLogin(router.asPath);
        console.log(urlAfterLogin);
        let token;
        try {
            token = extractTokenFromUrl(urlAfterLogin);
        } catch (e) {
            console.log(e);
        }
        if (token) {
            setAuthorizationToken(token);
            redirect('vc-wallet');
        }
    }, [router]);

    return (
        <LogInModal>
            <Left>
                <Body1 fontWeight="700" color="#FFFFFF" margin="0">Why do you need Identix.PASS?</Body1>
                <Body1 color="#FFFFFF" margin="20px 0 0">To get bonuses, privileges and discounts! Your favourite services want to know whether you are credible and experienced to get this advantage or to authorize as a credible community member. Therefore they want you to provide several verifiable credentials (VCs) in exchange for their specials offers.</Body1>
            </Left>
            <Right>
                <Image src="/assets/identix-pass-logo.svg" width="270" height="260"/>
                <ButtonGradient onClick={() => redirect(redirectUrl)}>
                    Log in
                </ButtonGradient>
                <ButtonTransparent onClick={() => {
                    redirect('vc-wallet');
                    setAuthorizationToken(FlatQubeAuthorizationToken);
                }}>
                    Log in as FlatQube verifier
                </ButtonTransparent>
            </Right>
        </LogInModal>
    );
};

const LogInModal = styled.div`
  position: relative;
  display: flex;
  height: 440px;
  width: 800px;
  margin-top: calc(50vh - 280px);
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  
  @media(min-width: 1400px) {
    height: 540px;
    width: 960px;
    margin-top: calc(50vh - 330px);
  }
`;

const Left = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  background: radial-gradient(137.98% 131.68% at 46.37% 44.46%, rgba(143, 90, 224, 0) 0%, rgba(0, 223, 255, 0.5) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(179.18deg, #2A3F7E 6.96%, rgba(58, 163, 193, 0.6) 174.88%), rgba(115, 121, 216, 0.92);
  border-radius: 8px 0 0 8px;
  padding: 110px 50px;

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    bottom: 55px;
    left: 40px;
    transform: rotate(180deg);
    background: url('/assets/corner-icon.svg') center/contain no-repeat;
  }

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    top: 108px;
    right: 40px;
    background: url('/assets/corner-icon.svg') center/contain no-repeat;

    @media(min-width: 1400px) {
      top: 155px;
    }
  }

  @media(min-width: 1400px) {
    padding: 160px 50px;
  }
`;

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 50%;
  background: #FFFFFF;
  padding: 40px 35px;
  border-radius: 0 8px 8px 0;

  @media(min-width: 1400px) {
    padding: 80px 0;
  }
`;

