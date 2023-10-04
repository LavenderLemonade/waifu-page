import { useState, useEffect } from 'react'
import axios from 'axios'

const useData = () => {
    const [picData, setPic] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('hit')
        axios.get('https://api.waifu.pics/sfw/waifu').then((response) => {
            setPic(response.data.url);
            setIsLoading(false);
        })
    }, []);

    return { picData, isLoading }

}

export default useData