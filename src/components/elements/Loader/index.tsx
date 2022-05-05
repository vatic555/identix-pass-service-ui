import styles from './Loader.module.scss';
import React from 'react';

export const Loader = (): JSX.Element => {
    return (
        <div className={styles.lds_ellipsis}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};
