import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { Action } from '../../atoms';

export default function Footer(props) {
    const { primaryLinks = [], copyrightText } = props;
    return (
        <footer className="w-full py-margin-desktop bg-obsidian border-t border-white/10">
            <div className="flex flex-col items-center gap-unit px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                {/* Logo */}
                <div className="mb-12 opacity-80 hover:opacity-100 transition-opacity duration-300 text-center select-none">
                    <img
                        alt="Avento Drones Logo"
                        className="h-16 w-16 object-contain mb-4 mx-auto filter grayscale opacity-70"
                        src="/images/square logo real.png"
                    />
                    <span className="font-headline-md text-headline-md text-bone-white uppercase tracking-widest font-light">AVENTO</span>
                </div>
                {/* Navigation links */}
                {primaryLinks.length > 0 && (
                    <nav className="flex flex-wrap justify-center gap-8 mb-12">
                        {primaryLinks.map((link, index) => (
                            <Action
                                key={index}
                                {...link}
                                className="font-label-mono text-label-mono text-on-surface-variant hover:text-bone-white transition-colors duration-300 uppercase"
                            />
                        ))}
                    </nav>
                )}
                {/* Copyright */}
                {copyrightText && (
                    <div className="text-center w-full pt-8 border-t border-surface-variant/50">
                        <p className="font-label-mono text-label-caps text-surface-variant">
                            © 2024 AVENTO DRONES. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                )}
            </div>
        </footer>
    );
}

function Contacts(props) {
    const { phoneNumber, phoneAltText, email, emailAltText, address, addressAltText, elementId, className } = props;
    return (
        <div id={elementId || null} className={className}>
            {phoneNumber && (
                <p>
                    <a className="underline hover:no-underline" href={`tel:${phoneNumber}`} aria-label={phoneAltText}>
                        {phoneNumber}
                    </a>
                </p>
            )}
            {email && (
                <p>
                    <a className="underline hover:no-underline" href={`mailto:${email}`} aria-label={emailAltText}>
                        {email}
                    </a>
                </p>
            )}
            {address && (
                <p>
                    <a
                        className="underline hover:no-underline"
                        href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
                        aria-label={addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {address}
                    </a>
                </p>
            )}
        </div>
    );
}
