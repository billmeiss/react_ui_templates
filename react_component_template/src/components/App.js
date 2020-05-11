import React from 'react';
import Menu from './Menu';
import Feed from './Feed';

const App = () => {
    return (
        <>
            <Menu />
            <div className="ui container">
                <Feed />
            </div>
        </>
    );
}

export default App;