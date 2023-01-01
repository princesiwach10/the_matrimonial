import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '90vh',
    color: '#fff',
    textAlign: 'center',
    background: 'URL("https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5ff82014131b7_json_image_1610096660.webp")',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover'
};

const HeroSection = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default HeroSection;