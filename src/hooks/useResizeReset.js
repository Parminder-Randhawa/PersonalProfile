import { useEffect, useState } from 'react';

export default function useResizeReset() {
    const [resizeReset, setResizeReset] = useState(0);

    useEffect(() => {
        let timeout;

        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setResizeReset(previous => previous + 1);
            }, 250);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        };
    }, []);

    return resizeReset;
}
