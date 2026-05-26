import * as React from 'react';
import classNames from 'classnames';

import Section from '../Section';
import { Action } from '../../atoms';
import { HeroSection } from '@/types';

export default function Component(props: HeroSection) {
    const { type, elementId, colors, backgroundSize, title, subtitle, text, actions = [], styles = {} } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            {/* Background Image & Overlays matching Stitch template */}
            <div className="absolute inset-0 z-0 image-glow">
                <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/60 z-10"></div>
                <img
                    alt="Hero background aerial landscape"
                    className="w-full h-full object-cover object-center"
                    src="/images/DJI_20240618125441_0009_D_DRONEPIC.jpg"
                />
            </div>
            
            {/* Content centered */}
            <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mt-24">
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-container-lowest mb-6 tracking-tight">
                    View your work from<br/>
                    <span className="text-secondary-fixed italic font-light">another angle</span>
                </h1>
                {text && (
                    <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-10 tracking-wide">
                        {text}
                    </p>
                )}
                
                {/* Actions */}
                <HeroActions actions={actions} />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <span className="material-symbols-outlined text-surface-container-lowest" style={{ fontVariationSettings: "'FILL' 0" }}>expand_more</span>
            </div>
        </Section>
    );
}

function HeroActions(props: { actions: any[] }) {
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
                            "px-8 py-4 font-label-md text-label-md uppercase rounded transition-colors duration-300 w-full sm:w-auto text-center",
                            isPrimary
                                ? "bg-secondary text-on-secondary hover:bg-surface-container-lowest hover:text-on-surface"
                                : "border border-surface-container-lowest text-surface-container-lowest hover:border-secondary-fixed hover:text-secondary-fixed glass-panel"
                        )}
                    />
                );
            })}
        </div>
    );
}
