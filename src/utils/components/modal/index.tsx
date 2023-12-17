import React from 'react';

const Modal = ({children, close}: {children: React.ReactNode, close: () => void}) => {
    return (
        <div
            className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/50'
            onClick={close}
        >
            <div
                className="h-fit rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;