import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { Cloud, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ArrowDown, AudioLines, Github, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Button } from "~/components/ui/button";
import { cn, hslToHex } from "~/lib/utils";
import { env } from '~/env';
import { useTheme } from "next-themes";
import * as plaiceholder from 'plaiceholder';

const pfpSrc = `https://github.com/${env.NEXT_PUBLIC_GH_USER}.png`;

const getStaticProps: GetStaticProps<{
  blurDataURL?: string;
}> = async ({}) => {
  if (env.NODE_ENV !== 'production') {
    return { props: {} };
  }
  const buffer = await fetch(pfpSrc).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await plaiceholder.getPlaiceholder(buffer, { size: 10 });
  return { props: { blurDataURL: base64 } };
}

function Home({ blurDataURL }: InferGetStaticPropsType<typeof getStaticProps>) {
  const theme = useTheme();
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = React.useState(true);

  const cloudColor = React.useMemo(() => {
    if (typeof window === 'undefined' || !('getComputedStyle' in window)) {
      return '#000000';
    }
    const hslColor = window.getComputedStyle(document.body).getPropertyValue('--primary');
    const [h, s, l] = hslColor.split(' ').map((e) => Number(e.replace("%", "")))
    return hslToHex(h!, s!, l!);
    // linter doesn't get that the it should be a dep, as I'm using DOM apis in this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.resolvedTheme]);

  React.useEffect(() => {
    setImageLoaded(imageRef.current?.complete ?? false);
  }, []);

  return (
    <>
      <main className="flex-1">
        <section className="flex flex-col justify-around items-center text-center gap-8 min-h-[calc(100vh-5rem)] auto-limit-w">
          <Image ref={imageRef} className={cn("rounded-full transition-all blur-none", !imageLoaded && "blur-sm")} width={460} height={460} placeholder={blurDataURL == null ? "empty" : "blur"} blurDataURL={blurDataURL} src={pfpSrc} alt="PFP" onLoad={() => setImageLoaded(true)} />
          <div>
            <span className="text-2xl font-medium">Hi, I&apos;m <span className="text-primary">Amy</span>.</span> <br />
            <span className="text-xl">I&apos;m a software engineer and computer science student based in Australia.</span><br />
          </div>
          <Button asChild size="icon" className="rounded-full invisible md:visible">
            <Link href="#socials">
              <ArrowDown />
            </Link>
          </Button>
        </section>
        <section id="socials" className="h-screen relative flex pt-20">
          <div className="absolute -top-1/2 left-0 right-0 bottom-0 -z-10 transition-all">
            <Canvas dpr={0.25}>
              <ambientLight intensity={Math.PI / 2} />
              <PerspectiveCamera makeDefault position={[0, 5.25, 7.5]} fov={90}>
                <spotLight position={[0, 40, 2]} angle={0.5} decay={1} distance={45} penumbra={1} intensity={2000} />
                <spotLight position={[-19, 0, -8]} color="red" angle={0.25} decay={0.75} distance={185} penumbra={-1} intensity={400} />
              </PerspectiveCamera>
              <Cloud seed={10} color={cloudColor} speed={0.5} growth={0} smallestVolume={0.7} volume={25} opacity={0.4} bounds={[10, 1, 1]} />
            </Canvas>
          </div>
          <div className="auto-limit-w flex items-center justify-center gap-3">
            <Button asChild>
              <Link href={`https://github.com/${env.NEXT_PUBLIC_GH_USER}`}>
                <Github className="mr-1" />GitHub
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q">
                <Music className="mr-1" />Spotify
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://soundcloud.com/owotter">
                <AudioLines className="mr-1" />SoundCloud
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

export {
  getStaticProps
}