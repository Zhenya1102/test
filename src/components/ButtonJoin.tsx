import React from 'react';


type ButtonJoinPropsType = {
    callBack: ()=> void
    click:boolean
}

export const ButtonJoin:React.FC<ButtonJoinPropsType> = ({callBack, click}) => {

    const handlerButtonClick = () => {
        callBack()
    }
    return <button
        disabled={click}
        onClick={handlerButtonClick}>
        {click ? 'Cancelled' : 'Join table'}</button>
};
