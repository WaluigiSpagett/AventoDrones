import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function Header(props) {
    const { headerVariant, title, isTitleVisible, logo, primaryLinks = [], styles = {} } = props;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={classNames(
                'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out group bg-transparent',
                isScrolled ? 'bg-surface-container-lowest shadow-sm scrolled' : '',
                'hover:bg-surface-container-lowest hover:shadow-sm'
            )}
        >
            <HeaderVariants
                variant={headerVariant}
                title={title}
                isTitleVisible={isTitleVisible}
                logo={logo}
                primaryLinks={primaryLinks}
            />
        </header>
    );
}

function HeaderVariants(props) {
    // Recreate the page design using the single premier Stitch Header Layout
    return <HeaderVariantStitch {...props} />;
}

function HeaderVariantStitch(props) {
    const { primaryLinks = [], ...logoProps } = props;
    return (
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-[1440px] mx-auto">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <nav className="hidden md:flex items-center gap-8">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </nav>
            )}
            <div className="hidden md:block">
                <a
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-on-secondary font-label-md text-label-md uppercase rounded hover:bg-on-surface hover:text-surface-container-lowest transition-colors duration-300"
                    href="#contact"
                >
                    BOOK SHOOT
                </a>
            </div>
            {(primaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const { primaryLinks = [], ...logoProps } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="ml-auto md:hidden">
            <button
                aria-label="Open Menu"
                className="p-2 focus:outline-none text-surface-container-lowest group-hover:text-on-surface group-[.scrolled]:text-on-surface hover:!text-secondary transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(true)}
            >
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="fill-current h-6 w-6" />
            </button>
            <div className={classNames('sb-header-overlay', 'fixed', 'inset-0', 'overflow-y-auto', 'z-50', isMenuOpen ? 'block' : 'hidden')}>
                <div className="flex flex-col min-h-full bg-surface-container">
                    <div className="border-b border-outline-variant flex items-center justify-between px-margin-mobile py-6">
                        <SiteLogoLink {...logoProps} />
                        <div>
                            <button
                                aria-label="Close Menu"
                                className="p-2 focus:outline-none text-on-surface hover:text-secondary flex items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <CloseIcon className="fill-current h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    {primaryLinks.length > 0 && (
                        <div className="flex flex-col justify-center grow px-margin-mobile py-20 space-y-12">
                            <ul className="space-y-6">
                                <ListOfLinks links={primaryLinks} inMobileMenu={true} />
                            </ul>
                            <div className="pt-6">
                                <a
                                    className="inline-flex items-center justify-center w-full py-4 bg-secondary text-on-secondary font-label-md text-label-md uppercase rounded hover:bg-on-surface hover:text-surface-container-lowest transition-colors duration-300"
                                    href="#contact"
                                >
                                    BOOK SHOOT
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SiteLogoLink({ title, isTitleVisible, logo }) {
    if (!(logo || (title && isTitleVisible))) {
        return null;
    }
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 group/brand">
                {logo && (
                    <ImageBlock
                        {...logo}
                        className="h-10 w-10 object-contain opacity-90 group-hover/brand:opacity-100 transition-all duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-[.scrolled]:brightness-100 group-[.scrolled]:invert-0"
                    />
                )}
                {title && isTitleVisible && (
                    <span className="font-headline-md text-headline-md font-semibold tracking-widest text-surface-container-lowest group-hover:text-on-surface group-[.scrolled]:text-on-surface transition-colors duration-300 uppercase">
                        {title}
                    </span>
                )}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu }) {
    return links.map((link, index) => {
        const isActive = link.label === 'Portfolio' || link.label === 'Projects';
        return (
            <li key={index} className={classNames(inMobileMenu ? 'text-center w-full' : 'inline-flex items-center')}>
                <Action
                    {...link}
                    className={classNames(
                        "font-label-md text-label-md uppercase transition-all duration-300 ease-in-out",
                        isActive
                            ? "text-secondary border-b-2 border-secondary pb-1"
                            : "text-surface-container-lowest group-hover:text-on-surface-variant group-[.scrolled]:text-on-surface-variant hover:!text-secondary",
                        inMobileMenu ? "text-2xl text-on-surface" : ""
                    )}
                />
            </li>
        );
    });
}
