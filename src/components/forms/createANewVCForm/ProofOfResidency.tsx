import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {useFormFields} from './useFormHook';
import {Button} from '../../elements';
import {StateIdType} from './createANewVCForm.props';
import {useStateIdVCStore} from '../../../store/store';

export const ProofOfResidency: FC<StateIdType> = ({typeDid, typeTitle, nextStep}) => {
    const [match, setMatch] = useState(true);
    const {setVcParams, setVcTypeDid, setVcTypeTitle} = useStateIdVCStore();
    const [fields, handleFieldChange] = useFormFields({
        country: '',
        city: '',
        address: ''
    });

    const goNextStep = () => {
        setVcTypeDid(typeDid);
        setVcTypeTitle(typeTitle);
        if (Object.values(fields).every(item => item !== '') && typeDid !== '') {
            setVcParams(JSON.stringify(fields));
            nextStep();
        } else {
            setMatch(false);
        }
    };

    return (
        <>
            <Label>Fill in all fields of the VC</Label>
            <Input id="country" type="text" placeholder="Country" onChange={handleFieldChange}/>
            <Input id="city" type="text" placeholder="City" onChange={handleFieldChange}/>
            <Input id="address" type="text" placeholder="Address" onChange={handleFieldChange}/>
            <ButtonWrapper>
                {!match ? <Error>Please, fill in all fields</Error> : <></>}
                <Button onClick={(event) => {
                    goNextStep();
                    event.preventDefault();
                }}>Continue</Button>
            </ButtonWrapper>
        </>
    );
};

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 22px;
  background: #FFFFFF;
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  
  ::placeholder {
    font-weight: 400;
  }
  
  :active {
    outline: 0;
  }
  
  :focus {
    outline: 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Error = styled.div`
  width: 100%;
  display: block;
  color: #FF0000;
  background: #FFFFFF;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 13px;
  margin-bottom: 15px;
`;


const Label = styled.label`
  align-self: flex-start;
  color: #FFFFFF;
  margin: 18px 0 0 18px;
  font-size: 16px;
`;
