import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { DynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Action } from '../../atoms';
import { AnnotatedField } from '@/components/Annotated';
import { Button, HeroSection, Link } from '@/types';

export default function Component(props: HeroSection) {
    const { type, elementId, colors, backgroundSize, title, subtitle, text, media, actions = [], styles = {} } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlignItems = styles.self?.alignItems ?? 'center';
    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            {/* Gimbal Viewfinder / Reticle overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden select-none">
                {/* Central gimbal ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"></div>
                {/* Viewfinder corner brackets */}
                <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-white/30"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-white/30"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-white/30"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-white/30"></div>
            </div>
            <div
                className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8 relative z-10', {
                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row',
                    'space-y-reverse lg:space-y-0 lg:space-x-8 lg:space-x-reverse': sectionFlexDirection === 'row-reverse',
                    'space-y-reverse': sectionFlexDirection === 'col-reverse'
                })}
            >
                <div className="flex-1 w-full">
                    <HeroBody {...props} />
                    <HeroActions actions={actions} styles={styles.actions} hasTopMargin={!!(title || subtitle || text)} />
                </div>
                {media && (
                    <div className="flex-1 w-full">
                        <HeroMedia media={media} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function HeroMedia({ media }) {
    return <DynamicComponent {...media} />;
}

/*
 This is the only component in this codebase which has a few Stackbit annotations for specific primitive
 field. These are added by the <AnnotatedField> helper.
 The motivation for these annotations: allowing the content editor to edit styles at the field level.
 */
function HeroBody(props: HeroSection) {
    const { title, subtitle, text, styles = {} } = props;
    return (
        <>
            {/* Pulsing telemetry dot indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-secondary select-none">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                UAV OPERATOR ACTIVE
            </div>
            {title && (
                <AnnotatedField path=".title">
                    <h2 className={classNames('h1', styles.title ? mapStyles(styles.title) : null)}>{title}</h2>
                </AnnotatedField>
            )}
            {subtitle && (
                <AnnotatedField path=".subtitle">
                    <p className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-4': title })}>{subtitle}</p>
                </AnnotatedField>
            )}
            {text && (
                <AnnotatedField path=".text">
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, {
                            'mt-6': title || subtitle
                        })}
                    >
                        {text}
                    </Markdown>
                </AnnotatedField>
            )}
        </>
    );
}

function HeroActions(props: { actions: (Button | Link)[]; styles: any; hasTopMargin: boolean }) {
    const { actions = [], styles = {}, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('overflow-x-hidden', {
                'mt-8': hasTopMargin
            })}
        >
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))}>
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" />
                ))}
            </div>
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse') {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
        default:
            return null;
    }
}
