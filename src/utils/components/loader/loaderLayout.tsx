import React, {useEffect, useState} from 'react';
import Loader from './index'

type TLoaderLayoutProps = {
    loading: boolean,
    children: React.ReactNode,
}
const LoaderLayout = ({loading, children}: TLoaderLayoutProps) => {
    const [showLoader, setShowLoader] = useState(true);

    // Simulating a delay to hide the loader after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {
                (loading && showLoader)
                    ? <Loader showLoader={showLoader}/>
                    : children
            }
        </>
    );
};

export default LoaderLayout;