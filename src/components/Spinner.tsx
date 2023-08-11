import React from 'react';
import spinner from '../img/spiner.svg';
import s from './Sample.module.scss';

export const Spinner = () => {
    return (
        <div className={s.sample__spinner}>
            <img src={spinner} alt="spinner"/>
        </div>
    );
};
