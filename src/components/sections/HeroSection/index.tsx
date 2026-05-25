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
    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            {/* Background overlays matching template */}
            <div className="absolute inset-0 z-0 image-glow">
                <div className="absolute inset-0 bg-obsidian/60 z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/20 to-obsidian z-10"></div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 relative z-20 w-full text-center">
                <div className="w-full">
                    <HeroBody {...props} />
                    <HeroActions actions={actions} styles={styles.actions} hasTopMargin={true} />
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </div>
        </Section>
    );
}

function HeroMedia({ media }) {
    return <DynamicComponent {...media} />;
}

function HeroBody(props: HeroSection) {
    const { title, subtitle, text } = props;
    return (
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-24">
            <h1 className="font-display-lg text-display-lg md:text-[80px] leading-[1.1] text-bone-white mb-6 tracking-tight">
                View your work from<br/>
                <span className="text-metallic-gold italic font-light">another angle</span>
            </h1>
            {text && (
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-10 tracking-wide">
                    {text}
                </p>
            )}
        </div>
    );
}

function HeroActions(props: { actions: (Button | Link)[]; styles: any; hasTopMargin: boolean }) {
    const { actions = [] } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 w-full">
            {actions.map((action, index) => {
                const isPrimary = (action as any).style === 'primary';
                return (
                    <Action
                        key={index}
                        {...action}
                        className={classNames(
                            "px-8 py-4 font-label-caps text-label-caps transition-colors duration-300 w-full sm:w-auto text-center",
                            isPrimary
                                ? "bg-metallic-gold text-obsidian hover:bg-bone-white"
                                : "border border-bone-white text-bone-white hover:border-metallic-gold hover:text-metallic-gold glass-panel"
                        )}
                    />
                );
            })}
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
