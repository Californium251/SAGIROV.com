import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard.tsx';
import '../styles/features.css';
import axios from 'axios';

const Features = () => {
    const [features, setFeatures] = useState<Array<{ firstLine: string, number: string, secondLine: string }>>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://foolish-price-production.up.railway.app/api/1', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            setFeatures(JSON.parse(res.data.body));
        }
        fetchData();
    }, []);
    return <section className='features'>
        {features.map((feature, index) => <FeatureCard
            key={index}
            firstLine={feature.firstLine}
            number={feature.number}
            secondLine={feature.secondLine}
        />)}
    </section>;
};

export default Features;