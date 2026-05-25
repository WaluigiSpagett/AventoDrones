import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import Action from '../../atoms/Action';
import FeaturedItem from './FeaturedItem';

export default function FeaturedItemsSection(props) {
    const { type, elementId, colors, title, subtitle, actions = [], items = [], columns = 3, spacingX = 16, spacingY = 16, styles = {} } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            <div className="max-w-container-max mx-auto">
                {/* Section header with label and description side by side */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="font-label-mono text-label-mono text-metallic-gold mb-4 block">[ CAPABILITIES ]</span>
                        {title && <h2 className="font-headline-lg text-headline-lg text-bone-white">{title}</h2>}
                    </div>
                    {subtitle && (
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                            {subtitle}
                        </p>
                    )}
                </div>
                {items.length > 0 && (
                    <div
                        className={classNames('grid', mapColStyles(columns))}
                        style={{
                            columnGap: spacingX ? `${spacingX}px` : null,
                            rowGap: spacingY ? `${spacingY}px` : null
                        }}
                    >
                        {items.map((item, index) => (
                            <FeaturedItem key={index} {...item} />
                        ))}
                    </div>
                )}
                <FeaturedItemsActions actions={actions} styles={styles.actions} />
            </div>
        </Section>
    );
}

function FeaturedItemsActions(props) {
    const { actions = [], styles = {} } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="mt-10 overflow-x-hidden">
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))}>
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" />
                ))}
            </div>
        </div>
    );
}

function mapColStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
        default:
            return null;
    }
}
