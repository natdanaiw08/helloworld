import React from 'react';
import './App.css';

function App({ settings }) {
    return <>
        <div className="content">
            <div className="title m-b-md">
                {settings.title}
            </div>
        </div>
    </>
}

App.defaultProps = {
    settings: {
        title: "Something"
    }
}

export default App