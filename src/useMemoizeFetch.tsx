import { useEffect, useRef, useState } from "react";

// got custom hook from:
// https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/

export function useMemoizedFetch<T>(url: string) {
    const cache = useRef<any>({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            if (cache.current[url]) {
                const data = cache.current[url];
                setData(data);
                setStatus('fetched');
            } else {
                const response = await fetch(url);
                const data = await response.json();
                cache.current[url] = data; // set response in cache;
                setData(data);
                setStatus('fetched');
            }
        };

        fetchData();
    }, [url]);

    return { status, data };
};