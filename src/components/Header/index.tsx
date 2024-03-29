import { FC } from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Route, routes } from "cfg/routes";
import { useRouter } from "next/router";
import Head from "next/head";

const Header: FC = () => {
    const router = useRouter();
    let current_route = undefined as Route | undefined;
    const navigation = routes.map(e => { 
        e.current = e.href == router.asPath;
        if (e.current) current_route = e;
        return e;
    });

    const title = "Amy" + (current_route ? " - " + current_route.name : "");
    const image_src = `https://github.com/${process.env.GH_USERNAME}.png`;
    const description = "Software Development and Music Production";
    
    return <>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />

            <link rel="image_src" href={image_src} />
            <meta property="og:image" content={image_src} />
            <meta name="twitter:image" content={image_src} />
        </Head>
        <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 dark:bg-[#1C1B22] bg-white transition-colors">
            {({open, close}) => (
                <>
                    <div className={`auto-limit-w sm:border-b-0 border-b-[1px] border-white/30 ${!open && "shadow-lg scroll0:shadow-none transition-all xl:rounded-xl rounded-t-none"}`}>
                        <div className="relative flex h-14 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-primary" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center sm:items-stretch justify-between">
                                <div className="flex flex-shrink-0 px-3 text-lg items-center hover:text-primary transition-all">
                                    <Link href="/">
                                        Amy<span className="text-primary">;</span>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex">
                                        {navigation.map((item) => (
                                            (<Link
                                                key={item.name}
                                                href={item.href}
                                                className={`px-3 py-2 text-sm hover:tracking-[0.2em] transition-all ${item.current && "text-primary font-semibold"}`}
                                                aria-current={item.current ? 'page' : undefined}>

                                                {item.name}

                                            </Link>)
                                        ))}
                                        <span className="pl-2 translate-y-[1px]">
                                            <ThemeSwitch />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className={`sm:hidden ${!open ? "max-h-0" : "max-h-96 shadow-lg"} overflow-hidden transition-all`} static>
                        <div className="space-y-1 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name} passHref legacyBehavior>
                                    <Disclosure.Button
                                        onClick={() => close()} 
                                        as="a"
                                        className="block px-6 py-2 hover:text-primary transition-all"
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                            <ThemeSwitch><div className="block px-6 py-2 w-full">Toggle Theme</div></ThemeSwitch>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </>;
};

export default Header;