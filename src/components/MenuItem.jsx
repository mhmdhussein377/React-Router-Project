import React from 'react'

const MenuItem = ({menu}) => {
    let {image, name, price} = menu;

    return (
        <div className="menuItem">
            <div
                style={{
                backgroundImage: `url(${image})`
            }}></div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    );
}

export default MenuItem