import React, {ReactNode} from 'react';
import {LogIn} from '../components/templates/Login';
import Header from '../components/layout/Header';
import styled from 'styled-components';

export default function IndexPage(): ReactNode {

    return (
        <Main>
            <Header/>
            <LogIn/>
        </Main>
    );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 65px;
  width: 100vw;
  height: 100vh;
  background: url('/assets/bg.png') center/cover no-repeat;
`;
