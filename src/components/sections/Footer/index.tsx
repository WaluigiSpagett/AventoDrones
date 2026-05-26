import * as React from 'react';
import { Action } from '../../atoms';

export default function Footer(props) {
    const { primaryLinks = [], copyrightText } = props;
    return (
        <footer className="w-full py-margin-desktop bg-surface-container border-t border-outline-variant">
            <div className="flex flex-col items-center gap-md px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
                {/* Logo */}
                <div className="mb-12 opacity-80 hover:opacity-100 transition-opacity duration-300 text-center">
                    <img
                        alt="Avento Drones Logo"
                        className="h-16 w-16 object-contain mb-4 mx-auto"
                        src="/images/square logo real.png"
                    />
                    <span className="font-headline-md text-headline-md text-on-surface uppercase tracking-widest">AVENTO</span>
                </div>
                {/* Navigation links */}
                {primaryLinks.length > 0 && (
                    <nav className="flex flex-wrap justify-center gap-8 mb-12">
                        {primaryLinks.map((link, index) => (
                            <Action
                                key={index}
                                {...link}
                                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase"
                            />
                        ))}
                    </nav>
                )}
                {/* Copyright */}
                {copyrightText && (
                    <div className="text-center w-full pt-8 border-t border-outline-variant">
                        <p className="font-label-md text-label-md text-on-surface-variant uppercase">
                            © 2024 AVENTO DRONES. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                )}
            </div>
        </footer>
    );
}
