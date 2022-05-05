import React, {FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: string;
    headerText: string;
}

const exportData = (data: any) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'vc_raw_data.json';
    link.click();
};


export const RawDataModal: FunctionComponent<ModalProps> = ({isShown, hide, modalContent, headerText}) => {
    const modal = (
        <React.Fragment>
            <Backdrop onClick={hide}/>
            <Wrapper>
                <Header>
                    <HeaderText>{headerText}</HeaderText>
                    <div>
                        <DownloadButton onClick={() => exportData(JSON.parse(modalContent))}/>
                        <CloseButton onClick={hide}/>
                    </div>
                </Header>
                <Content><pre>{modalContent}</pre></Content>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 700px;
  height: 400px;
  background: white;
  border-radius: 8px;
  outline: 0;
  
  @media(min-width: 1400px) {
    width: 900px;
    height: 500px;
  }
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 14.92%, rgba(255, 255, 255, 0) 105.67%), linear-gradient(-90deg, #8F5AE0 -10.04%, #37B9C6 116.12%);
  padding: 0 20px;
  height: 44px;
  border-radius: 8px 8px 0 0;
  font-weight: 700;

  @media(min-width: 1400px) {
    height: 48px;
  }
`;

const HeaderText = styled.div`
  color: #fff;
  align-self: center;
`;

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 25px;
  width: 16px;
  height: 16px;
  background: url('/assets/close-icon.svg') center/contain no-repeat;
  :hover {
    cursor: pointer;
    opacity: .8;
  }

  @media (min-width: 1400px) {
    width: 19px;
    height: 19px;
  }
`;

const DownloadButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  width: 17px;
  height: 17px;
  background: url('/assets/download-icon.svg') center/contain no-repeat;
  :hover {
    cursor: pointer;
    opacity: .8;
  }

  @media (min-width: 1400px) {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
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

  pre {
    margin: 0;
    font-size: 12px;
  }

  @media (min-width: 1400px) {
    height: calc(100% - 48px);
  }
`;
