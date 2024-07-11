import { Cloud, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ArrowDown, AudioLines, Github, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { hslToHex } from "~/lib/utils";
import { env } from '~/env';

function Home() {
  // const [scrollPosition, setScrollPosition] = React.useState(0);
  // const [pageHeight, setPageHeight] = React.useState(0);
  const [cloudColor, setCloudColor] = React.useState("");  

  useEffect(() => {
    const hslColor = getComputedStyle(document.body).getPropertyValue('--primary');
    const [h, s, l] = hslColor.split(' ').map((e) => Number(e.replace("%", "")))
    setCloudColor(hslToHex(h!, s!, l!));
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //   const handleResize = () => {
  //     setPageHeight(window.innerHeight);

  //   }
  //   handleResize();
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   window.addEventListener('resize', handleResize, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <main className="flex-1">
        <section className="flex flex-col justify-around items-center text-center gap-8 min-h-[calc(100vh-5rem)] auto-limit-w">
          <Image className="rounded-full" width={460} height={460} src={`https://github.com/${env.NEXT_PUBLIC_GH_USER}.png`} alt="PFP" />
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
          <div className="absolute -top-96 left-0 right-0 bottom-0 -z-10 transition-all">
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <PerspectiveCamera makeDefault position={[0, 4.75, 7]} fov={90}>
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