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
            {/* Dynamic modern telemetry label */}
            {title === 'Project Archive' && (
                <span className="font-mono text-xs text-secondary mb-4 block uppercase tracking-widest font-semibold select-none">[ SELECTED WORKS ]</span>
            )}
            {title && <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)}>{title}</h2>}
            {subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-6': title })}>{subtitle}</p>
            )}
            <ProjectFeedVariants
                variant={variant}
                projects={projects}
                showDate={showDate}
                showDescription={showDescription}
                showFeaturedImage={showFeaturedImage}
                showReadMoreLink={showReadMoreLink}
                hasTopMargin={!!(title || subtitle)}
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
        <div className="mt-10 overflow-x-hidden">
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))}>
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="my-2 mx-2 lg:whitespace-nowrap" />
                ))}
            </div>
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
    return (
        <div
            className={classNames('grid', 'gap-8', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="sb-project-feed-item block group">
                    <article className="relative group overflow-hidden rounded-lg border border-outline-variant hover:border-primary transition-all duration-500 w-full h-[550px] shadow-sm flex flex-col justify-end">
                        {/* Background Image */}
                        {showFeaturedImage && project.featuredImage && (
                            <div className="absolute inset-0 z-0 w-full h-full">
                                <ImageBlock
                                    {...project.featuredImage}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        )}
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10"></div>
                        
                        {/* Interactive Gimbal Camera Viewfinder Overlay (fades in on hover) */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                            {/* Gimbal corner marks */}
                            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/40"></div>
                            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/40"></div>
                            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/40"></div>
                            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/40"></div>
                            {/* Centering dashed circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-dashed border-white/25 rounded-full"></div>
                        </div>

                        {/* Blinking camera telemetry overlay (fades in on hover) */}
                        <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1.5 px-2 py-0.5 bg-black/50 border border-white/10 rounded font-mono text-[9px] text-white tracking-widest select-none">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                            </span>
                            <span>CAM.{index + 1} {"//"} REC</span>
                        </div>

                        {/* Bottom Metadata & Title */}
                        <div className="absolute bottom-0 left-0 p-8 w-full z-20 flex flex-col justify-end text-left">
                            <div className="flex items-center gap-3 mb-3">
                                {project.category && (
                                    <span className="px-2 py-0.5 bg-white text-black font-mono text-[10px] font-extrabold uppercase rounded tracking-wider">
                                        {project.category}
                                    </span>
                                )}
                                {showDate && project.date && (
                                    <span className="font-mono text-xs text-white/80 tracking-wider">
                                        <ProjectDate date={project.date} />
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide leading-tight group-hover:text-primary transition-colors duration-300">
                                {project.title}
                            </h3>
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
