import React, {useState} from 'react';
import s from './Tournament.module.scss';
import pin from './imgTournament/pin.svg';
import time from './imgTournament/time.svg';
import players from './imgTournament/players.svg';
import tourney from './imgTournament/tourney.svg';
import {ButtonJoin} from './ButtonJoin';


type TournamentPropsType = {
    info: string
    title: string
    value: string
    winner: string
    color?: string
    background?: string
    image?: string
}


export const Tournament: React.FC<TournamentPropsType> = (
    {info, title, value, winner, color, background, image}
) => {
    const [click, setClick] = useState(false)
    const handlerButtonClick = () => {
        setClick(!click)
    }
    return (
        <div className={s.tournament}>
            <div className={s.tournament__body} style={{background:background}}>
                <div
                    className={`${s.tournament__registering} ${click ? s.canceled : ''}`}>{click ? 'Canceled' : 'Registering'}
                </div>
                <div className={s.tournament__columns}>
                    <div className={s.tournament__items}>
                        <div className={s.tournament__info}>
                            {image && <img src={image} alt="pin"/>}
                            <span>{info}</span>
                        </div>
                        <div className={s.tournament__title} style={{color:color}}>{title}</div>
                        <div className={s.tournament__date}>
                            <img src={time} alt="time"/>
                            <span>12:00 pm, 28 July</span>
                        </div>
                    </div>
                    <div className={s.tournament__join}>
                        <ButtonJoin callBack={handlerButtonClick} click={click}/>
                        <div className={s.tournament__result}>
                            <div><img src={players} alt="player"/><span>{value}</span></div>
                            <div><img src={tourney} alt="tourney"/><span>{winner}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
