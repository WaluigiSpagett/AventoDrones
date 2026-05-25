import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../molecules/ImageBlock';

export default function FeaturedItem(props) {
    const { elementId, title, icon, subtitle, text, featuredImage, actions = [], styles = {} } = props;

    // Map icon identifiers to Google Material Symbols Outlined names
    let symbolIcon = '';
    if (title === 'Photography') symbolIcon = 'photo_camera';
    if (title === 'Cinematography') symbolIcon = 'videocam';
    if (title === 'Custom Branded') symbolIcon = 'movie_filter';

    return (
        <div className="group bg-surface-container-low border border-surface-container-high hover:border-metallic-gold/50 p-10 transition-all duration-500 ease-out relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
            {symbolIcon && (
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-500 select-none">
                    <span className="material-symbols-outlined text-6xl text-metallic-gold" style={{ fontVariationSettings: "'FILL' 0" }}>{symbolIcon}</span>
                </div>
            )}
            <div>
                {title && <h3 className="font-headline-md text-headline-md text-bone-white mb-4 relative z-10">{title}</h3>}
                {text && <p className="font-body-md text-body-md text-on-surface-variant mb-8 relative z-10">{text}</p>}
            </div>
            {subtitle && (
                <div className="mt-auto border-t border-surface-variant pt-6 relative z-10">
                    <span className="font-label-mono text-label-mono text-secondary">{subtitle}</span>
                </div>
            )}
        </div>
    );
}
