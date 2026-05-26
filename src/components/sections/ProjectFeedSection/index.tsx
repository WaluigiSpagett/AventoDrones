import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import Section from '../Section';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';

export default function ProjectFeedSection(props) {
    const {
        type,
        elementId,
        colors,
        variant,
        title,
        subtitle,
        actions = [],
        projects = [],
        showDate,
        showFeaturedImage,
        styles = {}
    } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            {/* Section header */}
            <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-16 text-center">
                <span className="font-label-md text-label-md text-secondary mb-4 block uppercase">[ SELECTED WORKS ]</span>
                {title && <h2 className="font-headline-lg text-headline-lg text-on-surface">{title}</h2>}
            </div>
            
            {/* 3-Column Equal Grid Layout from Stitch Screen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-1 md:px-margin-desktop max-w-[1920px] mx-auto">
                {projects.map((project, index) => (
                    <Link key={index} href={project} className="sb-project-feed-item block group">
                        <article className="relative group overflow-hidden aspect-square md:aspect-auto md:h-[600px] rounded-lg">
                            {/* Background Image */}
                            {showFeaturedImage && project.featuredImage && (
                                <ImageBlock
                                    {...project.featuredImage}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            )}
                            {/* Dark overlay matching Stitch template */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80"></div>
                            
                            {/* Bottom content: slides up on hover */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-2">
                                    {project.category && (
                                        <span className="px-3 py-1 bg-surface/80 border border-outline-variant rounded font-label-md text-label-md text-on-surface backdrop-blur-sm uppercase">
                                            {project.category}
                                        </span>
                                    )}
                                    {showDate && project.date && (
                                        <span className="font-label-md text-label-md text-surface-container-lowest tracking-widest">
                                            <ProjectDate date={project.date} />
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">{project.title}</h3>
                                <span className="inline-flex items-center text-secondary-fixed font-label-md text-label-md hover:text-surface-container-lowest transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-100 uppercase">
                                    VIEW PROJECT <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Trailing action */}
            <ProjectFeedActions actions={actions} />
        </Section>
    );
}

function ProjectFeedActions(props) {
    const { actions = [] } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="text-center mt-16">
            {actions.map((action, index) => (
                <Action
                    key={index}
                    {...action}
                    className="inline-flex items-center justify-center px-8 py-4 border border-outline text-on-surface font-label-md text-label-md uppercase rounded hover:border-secondary hover:text-secondary transition-colors duration-300"
                />
            ))}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM.DD.YYYY');
    return <time dateTime={dateTimeAttr}>{formattedDate}</time>;
}
