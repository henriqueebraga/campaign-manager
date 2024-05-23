import { useEffect, useState } from 'react';
import tree from '../tree.json';
import { Campaign } from '../types/types';

const useLoadData = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Campaign | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = setTimeout(() => {
            try {
                const responseData = tree;

                setData(responseData);
                setLoading(false);
            } catch (error) {
                setError('An error occurred while fetching data.');
                setLoading(false);
            }
        }, 600);

        return () => clearTimeout(fetchData);
    }, []);

    return { loading, data, error };
};

export default useLoadData;
