import Spinner from 'components/Spinner';
import { NextPage } from 'next';
import { useState } from 'react';

const Radio: NextPage = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="pt-20 auto-limit-w">
            <div className='card hover p-0 overflow-hidden relative'>
                {
                    !loaded && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><Spinner className='fill-primary' /></div>
                }
                <iframe className={`${!loaded && 'invisible'} bg-primary`} onLoad={() => {setLoaded(true)}} src="https://open.spotify.com/embed/artist/15HdoPMP89EsIfIvN1coko?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    )
}

export default Radio;
