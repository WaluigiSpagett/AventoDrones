import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../molecules/ImageBlock';
import ArrowUpRightIcon from '../../svgs/arrow-up-right';

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
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        styles = {}
    } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self}>
            {/* Section header */}
            <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 text-center">
                <span className="font-label-mono text-label-mono text-metallic-gold mb-4 block">[ SELECTED WORKS ]</span>
                {title && <h2 className="font-headline-lg text-headline-lg text-bone-white">{title}</h2>}
            </div>
            <ProjectFeedVariants
                variant={variant}
                projects={projects}
                showDate={showDate}
                showDescription={showDescription}
                showFeaturedImage={showFeaturedImage}
                showReadMoreLink={showReadMoreLink}
                hasTopMargin={false}
            />
            <ProjectFeedActions actions={actions} styles={styles.actions} />
        </Section>
    );
}

function ProjectFeedActions(props) {
    const { actions = [], styles = {} } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className="text-center mt-16">
            {actions.map((action, index) => (
                <Action
                    key={index}
                    {...action}
                    className="inline-flex items-center justify-center px-8 py-4 border border-surface-variant text-bone-white font-label-caps text-label-caps hover:border-metallic-gold hover:text-metallic-gold transition-colors duration-300"
                />
            ))}
        </div>
    );
}

function ProjectFeedVariants(props) {
    const { variant = 'variant-a' } = props;
    switch (variant) {
        case 'variant-a':
        case 'variant-b':
        case 'variant-c':
            return <ProjectsVariantABC {...props} />;
        case 'variant-d':
            return <ProjectsVariantD {...props} />;
        default:
            return null;
    }
}

function ProjectsVariantABC(props) {
    const { variant = 'variant-a', projects = [], showDate, showDescription, showFeaturedImage, showReadMoreLink, hasTopMargin } = props;
    if (projects.length === 0) {
        return null;
    }

    // Bento grid layout from template: first item 8-col, second 4-col, third full 12-col
    const gridSpans = ['md:col-span-8', 'md:col-span-4', 'md:col-span-12'];
    const heights = ['md:h-[600px]', 'md:h-[600px]', 'md:h-[500px]'];
    const aspects = ['aspect-video', 'aspect-square', 'aspect-video'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 px-1 md:px-margin-desktop max-w-[1920px] mx-auto">
            {projects.map((project, index) => (
                <Link key={index} href={project} className={classNames('sb-project-feed-item block group', gridSpans[index] || 'md:col-span-12')}>
                    <article className={classNames(
                        'relative group overflow-hidden',
                        aspects[index] || 'aspect-video',
                        'md:aspect-auto',
                        heights[index] || 'md:h-[500px]'
                    )}>
                        {/* Background Image */}
                        {showFeaturedImage && project.featuredImage && (
                            <ImageBlock
                                {...project.featuredImage}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        )}
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
                        {/* Bottom content: slides up on hover */}
                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-2">
                                {project.category && (
                                    <span className="px-3 py-1 bg-obsidian/80 border border-metallic-gold/30 font-label-mono text-label-caps text-secondary backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                )}
                                {showDate && project.date && (
                                    <span className="font-label-caps text-label-caps text-bone-white/70 tracking-widest">
                                        <ProjectDate date={project.date} />
                                    </span>
                                )}
                            </div>
                            <h3 className="font-headline-md text-headline-md text-bone-white mb-2">{project.title}</h3>
                            <span className="inline-flex items-center text-metallic-gold font-label-caps text-label-caps hover:text-bone-white transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-100">
                                VIEW PROJECT <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                            </span>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

function ProjectsVariantD(props) {
    const { projects = [], showDate, showDescription, showFeaturedImage, showReadMoreLink, hasTopMargin } = props;
    if (projects.length === 0) {
        return null;
    }
    return (
        <div
            className={classNames('grid', 'gap-y-8', {
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="sb-project-feed-item block group">
                    <article className="border-b border-current pb-10 md:pb-12 md:px-4">
                        <div className="md:flex md:items-center">
                            {showFeaturedImage && project.featuredImage && (
                                <div className="mb-8 md:shrink-0 md:self-stretch md:w-48 md:mb-0 md:mr-8">
                                    <div className="block h-0 w-full pt-2/3 relative overflow-hidden md:h-24 md:min-h-full md:pt-0">
                                        <ImageBlock
                                            {...project.featuredImage}
                                            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className={classNames('md:grow', showFeaturedImage && project.featuredImage ? null : 'md:ml-12')}>
                                {showDate && project.date && (
                                    <div className="mb-3">
                                        <ProjectDate date={project.date} />
                                    </div>
                                )}
                                <h3>{project.title}</h3>
                                {showDescription && project.description && <p className="text-lg mt-5">{project.description}</p>}
                            </div>
                            {showReadMoreLink && (
                                <div className="mt-8 md:mt-0 md:mx-8">
                                    <span className="sb-component sb-component-block sb-component-button sb-component-button-secondary sb-component-button-icon">
                                        <span className="sr-only">Read more</span>
                                        <ArrowUpRightIcon className="fill-current h-5 w-5 md:h-8 md:w-8" />
                                    </span>
                                </div>
                            )}
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MM.DD.YYYY');
    return <time dateTime={dateTimeAttr}>{formattedDate}</time>;
}
