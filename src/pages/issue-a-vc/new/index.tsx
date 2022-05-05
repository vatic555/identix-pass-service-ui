import React, {ReactNode, ReactElement, useState} from 'react';
import Layout from '../../../components/layout';
import styled from 'styled-components';
import {Title2} from '../../../utils/typography';
import {BackButton} from '../../../components/elements';
import {StepOne, StepTwo, StepThree} from '../../../components/forms';

export default function CreateNewVCPage(): ReactNode {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
        console.log(step);
    };
    //
    // // function for going to previous step by decreasing step state by 1
    // const prevStep = () => {
    //     setstep(step - 1);
    // };

    return (
        <>
            <BackButton/>
            <Title2 margin="0 0 40px">Issue a new VC</Title2>
            <Form>
                <Steps>
                    <Step active={step === 1}>1. Choose the VC holder</Step>
                    <Step active={step === 2}>2. Fill the VC data</Step>
                    <Step active={step === 3}>3. Sign the VC</Step>
                </Steps>
                {step === 1 ? <StepOne nextStep={nextStep}/> : null}
                {step === 2 ? <StepTwo nextStep={nextStep}/> : null}
                {step === 3 ? <StepThree/> : null}
            </Form>
        </>
    );
}

const Form = styled.div`
  width: 100%;
  min-height: 430px;
  border: 2px solid #5A9CFF;
  border-radius: 8px;
  padding: 30px 25px;
`;

const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Step = styled.div<{active: boolean}>`
  position: relative;
  color: #FFFFFF;
  font-weight: 700;
  text-align: center;
  flex: 1 1 0;
  padding-bottom: 8px;
  cursor: pointer;
  
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #0BCDED;
    opacity: ${(props) => (props.active ? '1' : '0.3')};
    box-shadow: ${(props) => (props.active ? '0 1px 9px #0BCDED' : 'none')};
    border-radius: 2px;
    transition: all .2s;
  }
`;

CreateNewVCPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
