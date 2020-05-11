import React from 'react';

const Menu = () => {
    return (
        <div className="ui borderless menu">
            <a className="teal active item">
                Feed
                </a>
            <a className="item">
                Profile
            </a>
            <div className="right menu">
                <a className="item">
                    Log out
                </a>
            </div>
        </div>
    );
}

export default Menu