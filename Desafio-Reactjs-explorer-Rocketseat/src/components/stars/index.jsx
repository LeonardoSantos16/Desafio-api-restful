import React from 'react';
import starPink from '../../assets/star.svg';
import starGray from '../../assets/starnul.svg';
import { Container } from './styles';
export function StarComponent({ rating }) {
    let vetorTrue = new Array(5).fill(null);
    
    vetorTrue = vetorTrue.map((star, index) => {
        if (index < rating) {
            return starPink; 
        } else {
            return starGray;
        }
    });

    return (
        <Container>
            <div>
                {vetorTrue.map((item, index) => (
                    <img key={index} src={item} />
                ))}
            </div>
        </Container>
    );
}