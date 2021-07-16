//import React, { useState, useEffect } from 'react'
import React from 'react'
import { GifGridItem } from './GifGridItem';
import {useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">loading</p> }
            <div className="card-grid">
                { 
                    images.map(image =>(
                        <GifGridItem 
                            key={image.id} 
                            {...image} 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
