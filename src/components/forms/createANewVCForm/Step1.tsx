import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../../elements';
import {NextStepProps} from './createANewVCForm.props';
import {useStateIdVCStore} from '../../../store/store';
import Select, {StylesConfig} from 'react-select';
import {useGetAllAccountsQuery} from '../../../generated/graphql';

export const StepOne: FC<NextStepProps> = ({nextStep}): JSX.Element => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<MyOptionType[]>();
    const {data} = useGetAllAccountsQuery();
    const {setHolderDid} = useStateIdVCStore();

    const goNextStep = () => {
        setHolderDid(value);
        if (value) {
            nextStep();
        }
    };

    type MyOptionType = {
        value: string;
        label: string;
    };

    type IsMulti = false;

    useEffect(() => {
        if (data) {
            const values: MyOptionType[] = [];
            data.getAllAccounts.forEach((account: string) => {
                values.push({value: account, label: account});
            });
            setOptions(values);
        }
    }, [data]);

    const customStyles: StylesConfig<MyOptionType, IsMulti> = {
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            padding: 20,
            backgroundColor: state.isSelected ? 'rgba(143, 90, 224, 0.15)' : '#FFFFFF'
        }),
        control: (provided) => ({
            ...provided,
            height: '55px'
        }),
        container: (provided) => ({
            ...provided,
            width: '60%'
        }),
        singleValue: (provided) => ({
            ...provided,
            fontWeight: '700'
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '2px 22px'
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            color: '#0BCDED'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'black'
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'black',
            fontWeight: '700'
        })
    };

    return (
        <>
            <Form>
                <InputRow>
                    <Select styles={customStyles} options={options} placeholder="Choose did" onChange={(option) => {
                        setValue(option!.value);
                    }}/>
                    <Label htmlFor="did">Insert the DID of the VC holder here.<br/>
                        Currently only <strong>did:ever</strong> method is supported.</Label>
                </InputRow>
                <ButtonWrapper>
                    <Button style={{zIndex: 'unset'}} onClick={(event) => {
                        goNextStep();
                        event.preventDefault();
                    }}>Continue</Button>
                </ButtonWrapper>
            </Form>
        </>
    );
};

const Form = styled.form`
  padding: 70px 0 60px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > * {
    flex: 0 0 auto;
  }
`;

const Label = styled.label`
  width: 40%;
  padding-left: 35px;
  color: #FFFFFF;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  width: 60%;
`;
