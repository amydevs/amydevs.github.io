import { FC } from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { routes } from "cfg/routes";

const Header: FC = () => {
    const navigation = routes.map(e => { e.current = false; return e })

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 right-0 transition-all z-50 shadow-lg scroll0:shadow-none dark:bg-[#1C1B22] bg-white">
            {({open}) => (
                <>
                    <div className={`mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 sm:border-b-0 border-b-[1px] border-white/30`}>
                        <div className="relative flex h-14 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-primary" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center sm:items-stretch justify-between">
                                <div className="flex flex-shrink-0 px-3 text-lg items-center hover:text-secondary transition-all">
                                    <Link href="/">
                                        <a>Amy<span className="text-primary">!</span></a>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex">
                                        
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <a 
                                                    className="px-3 py-2 rounded-md text-sm text-inherit hover:tracking-[0.2em] transition-all"
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                        <span className="pl-1">
                                            <ThemeSwitch />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className={`sm:hidden ${!open ? "max-h-0" : "max-h-96"} overflow-hidden transition-all`} static>
                        <div className="space-y-1 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name} passHref>
                                    <Disclosure.Button
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
    )
};

export default Header;