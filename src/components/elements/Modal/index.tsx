import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Body4, TextGradient, Title3} from '../../../utils/typography';
import {Button} from '../Buttons';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent?: string;
    modalTitle?: string;
}


export const Modal: FunctionComponent<ModalProps> = ({isShown, hide, modalContent, modalTitle}) => {
    const modal = (
        <>
            <Backdrop onClick={hide}/>
            <Wrapper>
                <Content>
                    <Title3 color="black" textAlign="center" style={{textTransform: 'capitalize'}}>{modalTitle}</Title3>
                    <Body4 color="black" textAlign="center" margin="10px 0 50px"><TextGradient>{modalContent}</TextGradient></Body4>
                    <Button onClick={hide}>Ok</Button>
                </Content>
            </Wrapper>
        </>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 470px;
  height: 300px;
  background: white;
  border: 4px solid #53A9FD;
  border-radius: 8px;
  outline: 0;
  padding: 20px 40px 0;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  z-index: 500;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #dedede;
    opacity: 0.5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: rgba(141, 141, 141, 0.23);
  }

  @media (min-width: 1400px) {
    height: calc(100% - 48px);
  }
`;
