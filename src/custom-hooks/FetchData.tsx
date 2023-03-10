import React, { useState, useEffect } from 'react';
import { server_calls } from '../api'

export const useGetData = () => {
    // Syntax: const [stateName, saveStateFunction] = importedHook<requiredDataType>(value passed in);
    const [carData, setData] = useState<[]>([]);
    // console.log(carData)

    async function handleDataFetch(){
        try {
            const result = await server_calls.get();
            setData(result)
        } catch (error) {
            console.error(error);
        }
        const result = await server_calls.get();
        setData(result)
    }

    // This is the actual call of the funciton handleDataFetch,
    // where the data is actually acquired
    useEffect(() => {
        handleDataFetch();

    }, [carData]);

        // We return the data that we've saved
        return {carData, getData:handleDataFetch}
}