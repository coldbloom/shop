import React, { useState, useEffect } from 'react';

type TLoaderProps = {
    showLoader: boolean,
}
const Loader = ({showLoader}: TLoaderProps) => {
    return (
        <>
            {showLoader && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
        </>
    );
};

export default Loader;
