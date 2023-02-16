import css from './CardStyle.module.css';
import React from 'react';

function Card({imgUrl, job, description}){
    return(
        
    <div className = {css["cards"]}>
        <div className={css["image-card"]}>
            <img src={imgUrl} alt="" />
        </div>
        <div className={css["text-cards"]}>
        <h1 className={css["job"]}>{job}</h1>
        <p>{description}</p>
        </div>
    </div>
    )
}

function Card2({imgUrl, job, description}){
    return(
        
    <div className = {css["cards2"]}>
        <div className={css["image-card2"]}>
            <img src={imgUrl} alt="" />
        </div>
        <div className={css["text-cards2"]}>
        <h1 className={css["job2"]}>{job}</h1>
        <p>{description}</p>
        </div>
    </div>
    )
}


function Card3({imgUrl, name, nine, star, description}){
    return(
        <div className={css["cards3"]}>
            <div className={css["head"]}>
                <div className={css["userName"]}>
                <div className={css["image-user"]}>
                    <img src={imgUrl} alt="" />
                </div>
                <div className={css["text-user"]}>
                    <p>{name}</p>
                </div>
                </div>
                <div className={css["symbol"]}>
                    <img src={nine} alt="" />
                </div>
            </div>
            <div className={css["text-cards3"]}>

            <img src={star} alt="" />
            <p>{description}</p>
            </div>
        </div>
    )
}


function Card4({que, plus}){
    return(
        <div className={css["oneQ"]}>
            <div className={css["textQ"]}>
                <h1>{que}</h1>
            </div>
            <img src={plus} alt="" className={css["plus"]}/>
        </div>
    )
}

export  {Card, Card2, Card3, Card4}