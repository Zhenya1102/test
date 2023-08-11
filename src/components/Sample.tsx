import React from 'react';
import s from './Sample.module.scss';
import {Spinner} from './Spinner';
import {PlayerInfo} from './PlayerInfo';
import {Loader} from './Loader';
import {Tournament} from './Tournament';
import pin from './imgTournament/pin.svg';

export const Sample = () => {
    return (
        <div className={s.sample}>
            <div className={s.sample__container}>
               <div className={s.sample__body}>
                   <h1 className={s.sample__title}>Poker</h1>
                   <Spinner/>
                   <PlayerInfo/>
                   <Loader/>
                   <Tournament
                       info={'NL 2-7 Triple Draw'}
                       title={'OFC Pineapple'}
                       value={'1000/1000'}
                       winner={'1000000'}
                       image={pin}
                   />
                   <Tournament
                       info={'NL Holdem'}
                       title={'OFC Pineapple'}
                       value={'1/6'}
                       winner={'100'}
                       color={'#86FF8B'}
                       background={'#2F2B47'}
                       image={pin}
                   />
                   <Tournament
                       info={'NL OFC/pineapple prg'}
                       title={'Hourly Freeroll'}
                       value={'1/10 000'}
                       winner={'1000'}
                       image={pin}
                   />
                   <Tournament
                       info={'PL Omaha h/l'}
                       title={'Rapid Tournament'}
                       value={'0/0'}
                       winner={'1000000'}
                   />
                   <Tournament
                       info={'NL 6 cards omaha h/l'}
                       title={'PL Omaha Knockout'}
                       value={'0/100'}
                       winner={'146'}
                       color={'#FAFF1A'}
                   />
                   <Tournament
                       info={'NL 2-7 Triple Draw'}
                       title={'OFC Pineapple'}
                       value={'1000/1000'}
                       winner={'1000000'}
                       background={'#443E73'}
                   />
               </div>
            </div>
        </div>
    );
};
