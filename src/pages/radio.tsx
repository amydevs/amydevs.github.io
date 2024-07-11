import * as React from 'react';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { Card } from '~/components/ui/card';
import { cn } from '~/lib/utils';

const Radio = () => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState((ref.current?.contentDocument)?.readyState === 'complete');

  return (
    <div className='flex py-3 auto-limit-w min-h-[calc(100vh-5rem)]'>
      <Card className="flex flex-1 overflow-hidden">
        {
          !loaded && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><LoaderCircle className='text-primary animate-spin' /></div>
        }
        <iframe ref={ref} className={cn("flex-1", !loaded && "invisible")} onLoad={() => {setLoaded(true)}} src="https://open.spotify.com/embed/artist/15HdoPMP89EsIfIvN1coko?utm_source=generator&theme=0" width="100%" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </Card>
    </div>
        
  )
}

export default Radio;