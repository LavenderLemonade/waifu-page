import { useState } from 'react'
import axios from 'axios'
import WaifuPic from './WaifuPic';
import { ClipLoader } from "react-spinners";

function WaifuGetter() {

    const [picData, setPic] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    if (picData == null) {
        console.log('hit')
        axios.get('https://api.waifu.pics/sfw/waifu').then((response) => {
            setPic(response.data.url);
            setIsLoading(false);
        })
    }
    console.log(picData);

    return (
        <div className='Secondary'>
            {isLoading && <ClipLoader />}
            {!isLoading && <WaifuPic url={picData} />}
            <button onClick={() => setPic(null)}> Next Picture! </button>
        </div>

    )

}

export default WaifuGetter