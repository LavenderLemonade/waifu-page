import { useState, useEffect } from 'react'
import axios from 'axios'

const useData = () => {
    const [picData, setPic] = useState(null);

    useEffect(() => {
        console.log('hit')
        axios.get('https://api.waifu.pics/sfw/waifu').then((response) => {
            setPic(response.data.url)
        })
    }, []);

    return { picData }

}

export default useData