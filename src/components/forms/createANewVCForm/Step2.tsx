import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {NextStepProps} from './createANewVCForm.props';
import {useStateIdVCStore} from '../../../store/store';
import Select, {StylesConfig} from 'react-select';
import {StateId} from './StateId';
import {ProofOfResidency} from './ProofOfResidency';
import {useGetVcTypesQuery} from '../../../generated/graphql';

export const StepTwo: FC<NextStepProps> = ({nextStep}): JSX.Element => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [options, setOptions] = useState<MyOptionType[]>();
    const {holderDid} = useStateIdVCStore();
    const {data} = useGetVcTypesQuery();

    type MyOptionType = {
        label: string;
        value: string;
    };

    useEffect(() => {
        if (data) {
            const values: MyOptionType[] = [];
            data.getVcTypes.forEach((type: any) => {
                values.push({value: type.vcTypeDid, label: type.vcTypeTag.replace(/_/g, ' ').toLowerCase()});
            });
            setOptions(values);
        }
    }, [data]);

    type IsMulti = false;

    const customStyles: StylesConfig<MyOptionType, IsMulti> = {
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            padding: 20,
            backgroundColor: state.isSelected ? 'rgba(143, 90, 224, 0.15)' : '#FFFFFF',
            textTransform: 'capitalize'
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            height: '55px',
            border: '2px solid #0BCDED'
        }),
        container: (provided) => ({
            ...provided,
            width: '100%'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#FFFFFF',
            fontWeight: '700',
            textTransform: 'capitalize'
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
            color: 'white'
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#0BCDED',
            fontWeight: '700'
        })
    };

    return (
        <>
            <Form>
                <InputCol>
                    <InputReadOnly id="did" type="text" value={holderDid} readOnly/>
                    <Select styles={customStyles} options={options} placeholder="Choose VC Type" onChange={(option) => {
                        setValue(option!.value);
                        setTitle(option!.label);
                    }}/>
                    {value === 'did:ever:state-id-fd5das7hdh3h455t' && <StateId typeDid={value} typeTitle={title} nextStep={nextStep}/>}
                    {value === 'did:ever:proof-of-residency-jd4345hwd8383d33d' && <ProofOfResidency typeDid={value} typeTitle={title} nextStep={nextStep}/>}
                </InputCol>
            </Form>
        </>
    );
};

const Form = styled.form`
  padding: 70px 0 30px;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 15px; 
  
  & > * {
    flex: 0 0 auto;
  }
`;

const InputReadOnly = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 22px;
  background: transparent;
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  border: 2px solid #0BCDED;
  border-radius: 5px;
  
  :active {
    outline: 0;
  }
  
  :focus {
    outline: 0;
  }
`;

