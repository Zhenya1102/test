import React from 'react';
import s from './Loader.module.scss';



export const Loader = () => {
    return (
        <div className={s.loader}>
            <div className={s.loader__line}>
                <div></div>
            </div>
            <div className={s.loader__label}>Loadind 70%</div>
        </div>
    );
};
