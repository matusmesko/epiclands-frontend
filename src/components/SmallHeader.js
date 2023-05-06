import React from 'react';
import "../styles/SmallHeader.css";

const SmallHeader = (props) => {
    return (
        <header className={"small-header"}>
            <div className="small-header-background">
                <div className="small-header-container">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </header>
    );
};

export default SmallHeader;