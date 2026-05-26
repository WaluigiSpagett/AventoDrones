import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Action } from '../../atoms';

export default function TextSection(props) {
    const { type, elementId, colors, variant, title, subtitle, text, actions = [], styles = {} } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            <TextBodyVariants variant={variant} title={title} subtitle={subtitle} text={text} actions={actions} styles={styles} />
        </Section>
    );
}

function TextBodyVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <TextBodyVariantA {...rest} />;
        case 'variant-b':
            return <TextBodyVariantB {...rest} />;
        default:
            return null;
    }
}

function TextBodyVariantA(props) {
    const { title, text, actions = [] } = props;

    // Custom renderer rules to style FAQ markdown elements matching raw HTML
    const faqOptions = {
        forceBlock: true,
        forceWrapper: true,
        overrides: {
            h3: {
                component: ({ children }) => (
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{children}</h3>
                )
            },
            p: {
                component: ({ children }) => (
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{children}</p>
                )
            }
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Template telemetry tag & centered header */}
            <div className="text-center mb-16">
                <span className="font-label-md text-label-md text-secondary mb-4 block uppercase">[ INFORMATION ]</span>
                {title && <h2 className="font-headline-lg text-headline-lg text-on-surface">{title}</h2>}
            </div>

            {/* Structural FAQ list with custom markdown rendering */}
            {text && (
                <div className="space-y-8">
                    {/* Split FAQ text by ### headers and render each as a bordered item */}
                    {text.split(/(?=###\s)/).filter(block => block.trim()).map((block, index) => (
                        <div key={index} className="border-b border-outline-variant pb-8">
                            <Markdown options={faqOptions}>
                                {block.trim()}
                            </Markdown>
                        </div>
                    ))}
                </div>
            )}

            {/* Trailing action block */}
            {actions.length > 0 && (
                <div className="mt-16 text-center">
                    <p className="font-label-md text-label-md text-on-surface-variant mb-6">Need more information?</p>
                    {actions.map((action, index) => (
                        <Action
                            key={index}
                            {...action}
                            className="inline-flex items-center justify-center px-6 py-3 bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md uppercase rounded hover:border-secondary hover:text-secondary transition-colors duration-300"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function TextBodyVariantB(props) {
    const { title, subtitle, text, styles = {} } = props;
    return (
        <div className="flex flex-wrap">
            {(title || subtitle) && (
                <div className={classNames('w-full', { 'lg:w-1/3 lg:pr-3': text })}>
                    {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
                    {subtitle && (
                        <p
                            className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                                'mt-2': title
                            })}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {text && (
                <div className={classNames('w-full', { 'mt-12 lg:mt-0 lg:w-2/3 lg:pl-3': title || subtitle })}>
                    <Markdown
                        options={{ forceBlock: true, forceWrapper: true }}
                        className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null)}
                    >
                        {text}
                    </Markdown>
                </div>
            )}
        </div>
    );
}
