import styled from 'styled-components';
import React from 'react';
import styles from './Search.module.scss';
import {SearchProps} from './Search.props';

export const SearchBar = ({...props}: SearchProps): JSX.Element => {
    return (
        <SearchWrapper>
            <input className={styles.input} placeholder="Search" {...props}/>
        </SearchWrapper>
    );
};

export const SearchWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 100px;
  width: 220px;
  height: 42px;
   
  &::before {
    position: inherit;
    content: '';
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    background: url('/assets/search-icon.svg') center/contain no-repeat;

    @media(min-width: 1400px) {
      top: 12px;
    }
  }

  @media(min-width: 1400px) {
    width: 240px;
    height: 47px;
    top: 85px;
  }
`;

