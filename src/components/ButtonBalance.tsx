import React from 'react';
import s from './Sample.module.scss';
import unvisible from '../img/unvisible.svg';
import visible from '../img/visible.svg';

type ButtonBalancePropsType = {
    open: boolean
    setOpen: (open: boolean) => void
}


export const ButtonBalance = (props: ButtonBalancePropsType) => {
    const handlerButton = () => {
        props.setOpen(!props.open)
    }
    const buttonClass = props.open ? s.button_open : s.button_close;
    const iconVisible = props.open ? unvisible : visible
    const textVisible = props.open ? '$100,500.00' : 'Show balance'
    return (
        <button className={buttonClass} onClick={handlerButton}>
            <span className={s.span_img}><img src={iconVisible} alt="button"/></span>
            <span>{textVisible}</span>
        </button>
    );
};

