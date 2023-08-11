import React, {useState} from 'react';
import s from './Sample.module.scss';
import stars from '../img/stars.svg';
import avatar from '../img/avtar.svg';
import {ButtonBalance} from './ButtonBalance';

export const PlayerInfo = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={s.sample__player_info}>
            <div className={s.player_info__items}>
                <div className={s.player_info__name}>LongUserName</div>
                <img src={stars} alt="stars"/>
            </div>
            <div className={s.player_info__avatar}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={s.player_info__balance}>
                <ButtonBalance open={open} setOpen={setOpen}/>
            </div>
        </div>
    );
};
