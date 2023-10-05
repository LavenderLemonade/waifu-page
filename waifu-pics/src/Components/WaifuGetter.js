import { useState } from 'react'
import axios from 'axios'

const WaifuGetter = () => {

    const [picData, setPic] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    if (picData == null) {
        console.log('hit')
        axios.get('https://api.waifu.pics/sfw/waifu').then((response) => {
            setPic(response.data.url);
            setIsLoading(false);
            console.log(picData);
        })
    }



    return { picData, isLoading }

}

export default WaifuGetter