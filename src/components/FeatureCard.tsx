import React, { FC } from 'react';
import '../styles/feature-card.css';

type FeatureCardProps = {
    firstLine: string;
    number: string;
    secondLine: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ firstLine, number, secondLine }) => {
    return <div className='feature-card__wrapper'>
        <div className='feature-card'>
            <p className='feature-card__text'>{firstLine}</p>
            <p className='feature-card__number'>{number}</p>
            <p className='feature-card__text'>{secondLine}</p>
        </div>
    </div>;
};

export default FeatureCard;