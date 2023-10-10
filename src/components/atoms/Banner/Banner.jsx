import React from "react";

const Banner = ({title, color, bgColor}) => {

    return (
        <div 
        style={{
            color: color,
            backgroundColor: bgColor
        }}
        >
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;