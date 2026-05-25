import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { Link, Action, Social } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

export default function Header(props) {
    const { headerVariant, isSticky, title, isTitleVisible, logo, primaryLinks = [], socialLinks = [], styles = {} } = props;
    const headerWidth = styles.self?.width ?? 'narrow';
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
                'sb-component',
                'sb-component-header',
                'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
                isScrolled
                    ? 'bg-obsidian/80 backdrop-blur-md border-b border-white/10 shadow-sm scrolled'
                    : 'bg-obsidian/40 border-b border-transparent'
            )}
        >
            <div
                className={classNames(
                    'mx-auto px-margin-mobile md:px-margin-desktop',
                    mapMaxWidthStyles(headerWidth)
                )}
            >
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <HeaderVariants
                    variant={headerVariant}
                    title={title}
                    isTitleVisible={isTitleVisible}
                    logo={logo}
                    primaryLinks={primaryLinks}
                    socialLinks={socialLinks}
                />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <HeaderVariantA {...rest} />;
        case 'variant-b':
            return <HeaderVariantB {...rest} />;
        case 'variant-c':
            return <HeaderVariantC {...rest} />;
        default:
            return null;
    }
}

function HeaderVariantA(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="flex justify-between items-center w-full py-4">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <nav className="hidden md:flex items-center gap-8">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </nav>
            )}
            <div className="hidden md:block">
                <a
                    className="inline-flex items-center justify-center px-6 py-3 bg-metallic-gold text-obsidian font-label-caps text-label-caps hover:bg-bone-white transition-colors duration-300"
                    href="#contact"
                >
                    BOOK SHOOT
                </a>
            </div>
            {(primaryLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantB(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="flex items-stretch relative">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:flex border-l border-current divide-x divide-current ml-auto">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'border-l', 'border-current', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantC(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="flex items-stretch relative">
            <SiteLogoLink {...logoProps} />
            {socialLinks.length > 0 && (
                <ul className="hidden lg:flex border-l border-current ml-auto">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden', 'lg:flex', 'border-l', 'border-current', 'divide-x', 'divide-current', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
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
        <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" className="h-10 min-h-full p-4 focus:outline-none text-bone-white hover:text-metallic-gold" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="fill-current h-6 w-6" />
            </button>
            <div className={classNames('sb-header-overlay', 'fixed', 'inset-0', 'overflow-y-auto', 'z-20', isMenuOpen ? 'block' : 'hidden')}>
                <div className="flex flex-col min-h-full bg-obsidian">
                    <div className="border-b border-surface-variant flex items-stretch justify-between px-margin-mobile py-4">
                        <SiteLogoLink {...logoProps} />
                        <div>
                            <button aria-label="Close Menu" className="h-10 min-h-full p-4 focus:outline-none text-bone-white" onClick={() => setIsMenuOpen(false)}>
                                <CloseIcon className="fill-current h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    {(primaryLinks.length > 0 || socialLinks.length > 0) && (
                        <div className="flex flex-col justify-center grow px-margin-mobile py-20 space-y-12">
                            {primaryLinks.length > 0 && (
                                <ul className="space-y-6">
                                    <ListOfLinks links={primaryLinks} inMobileMenu={true} />
                                </ul>
                            )}
                            {socialLinks.length > 0 && (
                                <ul className="flex flex-wrap justify-center">
                                    <ListOfSocialLinks links={socialLinks} inMobileMenu={true} />
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SiteLogoLink({ title, logo }) {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4 group/brand">
                {logo && <ImageBlock {...logo} className="h-10 w-10 object-contain opacity-90 group-hover/brand:opacity-100 transition-opacity" />}
                {title && (
                    <span className="font-headline-md text-headline-md font-light tracking-widest text-bone-white uppercase">
                        {title}
                    </span>
                )}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu }) {
    return links.map((link, index) => {
        const isActive = link.label === 'Portfolio';
        return (
            <Action
                key={index}
                {...link}
                className={classNames(
                    "font-label-caps text-label-caps uppercase transition-all duration-300 ease-in-out",
                    isActive
                        ? "text-metallic-gold border-b-2 border-metallic-gold pb-1"
                        : "text-bone-white hover:text-metallic-gold",
                    inMobileMenu ? "text-2xl" : ""
                )}
            />
        );
    });
}

function ListOfSocialLinks({ links, inMobileMenu = false }) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? 'border border-current -ml-px -mt-px' : 'inline-flex items-stretch')}>
            <Social {...link} className={classNames('sb-component-social-fill', 'text-base', inMobileMenu ? 'p-5' : 'p-4')} />
        </li>
    ));
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-container-max';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
        default:
            return null;
    }
}
