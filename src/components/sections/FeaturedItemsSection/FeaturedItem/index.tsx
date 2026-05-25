import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import Action from '../../../atoms/Action';
import ImageBlock from '../../../molecules/ImageBlock';

// Inline premium SVG icons from Stitch warm theme specifications
const CameraIcon = () => (
    <svg className="h-10 w-10 text-primary opacity-80" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const VideoIcon = () => (
    <svg className="h-10 w-10 text-primary opacity-80" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const ReelIcon = () => (
    <svg className="h-10 w-10 text-primary opacity-80" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5m15.75 0a1.125 1.125 0 001.125-1.125M19.125 19.5h1.5M3.375 18.375v-13.5M20.625 18.375v-13.5m0 0a1.125 1.125 0 00-1.125-1.125M20.625 4.875h-1.5m-15.75 0a1.125 1.125 0 011.125-1.125m-1.125 1.125h1.5m1.5-1.5h12.75c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125H6c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5h6M9 10.5h6M9 13.5h6" />
    </svg>
);

const iconMap = {
    camera: CameraIcon,
    video: VideoIcon,
    reel: ReelIcon
};

export default function FeaturedItem(props) {
    const { elementId, title, icon, subtitle, text, featuredImage, actions = [], styles = {} } = props;
    const { self = {} } = styles;
    const { borderWidth, ...otherSelfStyles } = self;
    
    const IconComponent = icon ? iconMap[icon] : null;

    let indexPrefix = '';
    if (title === 'Photography') indexPrefix = '01 // ';
    if (title === 'Cinematography') indexPrefix = '02 // ';
    if (title === 'Custom Branded') indexPrefix = '03 // ';

    return (
        <article
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-item',
                'bg-surface-container-low border border-outline-variant rounded-lg p-10 hover:border-primary transition-all duration-500 flex flex-col justify-between h-full relative',
                mapStyles(otherSelfStyles)
            )}
            style={{
                borderWidth: borderWidth ? `${borderWidth}px` : null
            }}
        >
            <div>
                {/* Top Row: Title and SVG Icon */}
                <div className="flex justify-between items-start mb-6">
                    {title && (
                        <h3 className={classNames('text-2xl font-bold font-sans flex items-baseline', styles.title ? mapStyles(styles.title) : null)}>
                            {indexPrefix && <span className="font-mono text-xs text-secondary/70 mr-1.5 select-none">{indexPrefix}</span>}
                            <span>{title}</span>
                        </h3>
                    )}
                    {IconComponent && (
                        <div className="text-primary">
                            <IconComponent />
                        </div>
                    )}
                </div>

                {featuredImage && (
                    <div className="mb-6">
                        <ImageBlock {...featuredImage} className="inline-block" />
                    </div>
                )}

                {/* Description Body Text */}
                {text && (
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown text-base text-on-light/80 leading-relaxed', {
                            'mt-4': title
                        })}
                    >
                        {text}
                    </Markdown>
                )}
            </div>

            {/* Bottom Row: Starting from Pricing details */}
            <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                {subtitle && (
                    <p className={classNames('font-mono text-sm tracking-wider uppercase text-secondary font-semibold', styles.subtitle ? mapStyles(styles.subtitle) : null)}>
                        {subtitle}
                    </p>
                )}
                <ItemActions actions={actions} textAlign={otherSelfStyles.textAlign} hasTopMargin={false} />
            </div>
        </article>
    );
}

function ItemActions(props) {
    const { actions = [], textAlign, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-4': hasTopMargin
            })}
        >
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', {
                    'justify-center': textAlign === 'center',
                    'justify-end': textAlign === 'right'
                })}
            >
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" />
                ))}
            </div>
        </div>
    );
}
