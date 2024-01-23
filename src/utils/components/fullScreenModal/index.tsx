import React from 'react';

type FullScreenModalProps = {
    children: React.ReactNode,
    close: () => void,
}
const FullScreenModal = ({children, close}: FullScreenModalProps) => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
    }, [])
    return (
        <div className='w-full h-screen bg-white fixed top-0 left-0 backdrop-blur-2xl'>
            <button onClick={close}>назад</button>
            <div>
                {children}
            </div>
        </div>
    );
};

export default FullScreenModal;