import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {useFormFields} from './useFormHook';
import DatePicker, {Day, DayValue, utils} from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import {Button} from '../../elements';
import {StateIdType} from './createANewVCForm.props';
import {useStateIdVCStore} from '../../../store/store';

export const StateId: FC<StateIdType> = ({typeDid, typeTitle, nextStep}) => {
    const [match, setMatch] = useState(true);
    const {setVcParams, setVcTypeDid, setVcTypeTitle} = useStateIdVCStore();
    const [dayOfBirth, setDayOfBirth] = useState<DayValue>(null);
    const [dayOfIssuance, setDayOfIssuance] = useState<DayValue>(null);
    const [dayOfExpiry, setDayOfExpiry] = useState<DayValue>(null);
    const [fields, handleFieldChange] = useFormFields({
        firstName: '',
        lastName: '',
        citizenship: '',
        dateOfBirth: '',
        id: '',
        dateOfIssuance: '',
        dateOfExpiry: ''
    });

    const goNextStep = () => {
        setVcTypeDid(typeDid);
        setVcTypeTitle(typeTitle);
        if (dayOfBirth && dayOfIssuance && dayOfExpiry) {
            fields.dateOfBirth = convertDate(dayOfBirth);
            fields.dateOfIssuance = convertDate(dayOfIssuance);
            fields.dateOfExpiry = convertDate(dayOfExpiry);
            if (Object.values(fields).every(item => item !== '') && typeDid !== '') {
                setVcParams(JSON.stringify(fields));
                nextStep();
            } else {
                setMatch(false);
            }
        }
    };

    const convertDate = (date: Day) => {
        return new Date(date.year, date.month - 1, date.day);
    };

    return (
        <>
            <Label>Fill in all fields of the VC</Label>
            <Input id="firstName" type="text" placeholder="Name" onChange={handleFieldChange}/>
            <Input id="lastName" type="text" placeholder="Last Name" onChange={handleFieldChange}/>
            <Input id="citizenship" type="text" placeholder="Citizenship" onChange={handleFieldChange}/>
            <DatePicker
                value={dayOfBirth}
                colorPrimary="#0BCDED"
                onChange={setDayOfBirth}
                maximumDate={utils('en').getToday()}
                inputPlaceholder="Date of birth"
            />
            <Input id="id" type="text" placeholder="ID" onChange={handleFieldChange}/>
            <DatePicker
                value={dayOfIssuance}
                colorPrimary="#0BCDED"
                onChange={setDayOfIssuance}
                inputPlaceholder="Date of issuance"
            />
            <DatePicker
                value={dayOfExpiry}
                colorPrimary="#0BCDED"
                onChange={setDayOfExpiry}
                inputPlaceholder="Date of expiry"
            />
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

