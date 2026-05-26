import * as React from 'react';

export default function FeaturedItem(props) {
    const { title, subtitle, text } = props;

    // Map icon identifiers to Google Material Symbols Outlined names
    let symbolIcon = '';
    if (title === 'Photography') symbolIcon = 'photo_camera';
    if (title === 'Cinematography') symbolIcon = 'videocam';
    if (title === 'Custom Branded') symbolIcon = 'movie_filter';

    return (
        <div className="group bg-surface-container-low border border-outline-variant rounded-xl hover:border-secondary p-10 transition-all duration-500 ease-out relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
            {symbolIcon && (
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500 select-none">
                    <span className="material-symbols-outlined text-6xl text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>{symbolIcon}</span>
                </div>
            )}
            <div>
                {title && <h3 className="font-headline-md text-headline-md text-on-surface mb-4 relative z-10">{title}</h3>}
                {text && <p className="font-body-md text-body-md text-on-surface-variant mb-8 relative z-10">{text}</p>}
            </div>
            {subtitle && (
                <div className="mt-auto border-t border-outline-variant pt-6 relative z-10">
                    <span className="font-label-md text-label-md text-secondary">{subtitle}</span>
                </div>
            )}
        </div>
    );
}
