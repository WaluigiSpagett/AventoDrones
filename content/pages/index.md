---
type: PageLayout
title: Home
colors: colors-b
backgroundImage:
  type: BackgroundImage
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 30
  url: /images/DJI_20240618125441_0009_D_DRONEPIC.jpg
sections:
  - type: HeroSection
    elementId: 'hero'
    colors: colors-f
    backgroundSize: inset
    title: View your work from
    subtitle: another angle
    text: Professional UAV Photography & Cinematography.
    actions:
      - type: Button
        label: VIEW PORTFOLIO
        url: '#portfolio'
        style: primary
      - type: Button
        label: EXPLORE SERVICES
        url: '#services'
        style: secondary
    styles:
      self:
        height: screen
        width: wide
        alignItems: center
        justifyContent: center
        flexDirection: col
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
      title:
        textAlign: center
        fontWeight: 700
      subtitle:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
  - type: FeaturedItemsSection
    elementId: 'services'
    colors: colors-f
    title: Precision Services
    subtitle: Drone packages tailored to high-end real estate, commercial infrastructure, and cinematic productions.
    columns: 3
    spacingX: 32
    spacingY: 32
    items:
      - type: FeaturedItem
        title: Photography
        icon: camera
        subtitle: Starting from £100
        text: High-resolution aerial stills perfect for residential surveys and architectural portfolios.
        styles:
          self:
            borderWidth: 1
            borderColor: border-outline-variant
            borderRadius: large
            padding:
              - pt-10
              - pb-10
              - pl-10
              - pr-10
      - type: FeaturedItem
        title: Cinematography
        icon: video
        subtitle: Starting from £150
        text: Smooth, stabilized 4K video capture for commercial projects and event coverage.
        styles:
          self:
            borderWidth: 1
            borderColor: border-outline-variant
            borderRadius: large
            padding:
              - pt-10
              - pb-10
              - pl-10
              - pr-10
      - type: FeaturedItem
        title: Custom Branded
        icon: reel
        subtitle: Starting from £200
        text: Bespoke photo and video packages with professional color grading and branding integration.
        styles:
          self:
            borderWidth: 1
            borderColor: border-outline-variant
            borderRadius: large
            padding:
              - pt-10
              - pb-10
              - pl-10
              - pr-10
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-32
          - pb-32
          - pl-4
          - pr-4
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: FeaturedProjectsSection
    elementId: 'portfolio'
    colors: colors-f
    title: Project Archive
    subtitle: Selected Works
    showDate: true
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-one.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-two.md
    actions:
      - type: Button
        label: SEE ALL PROJECTS
        url: /projects
        style: secondary
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-32
          - pb-12
          - pl-4
          - pr-4
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: QuoteSection
    quote: View your work from another angle.
    name: '- Will'
    title: Head UAV Photographer at Avento
    colors: colors-f
    elementId: 'quote'
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-8
          - pr-8
        justifyContent: center
        borderRadius: large
        borderColor: border-current
        borderWidth: 1
        borderStyle: solid
      quote:
        textAlign: center
      name:
        fontWeight: 500
        textAlign: center
      title:
        fontWeight: 400
        textAlign: center
  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: Frequently Asked Questions
    subtitle: ''
    text: |
      ### How much does it cost?
      Drone packages start at £100 for a basic photo package, £150 for a photo and video package, and £200 for custom branded photo and videos. Please contact us via email for a detailed quote tailored to your specific requirements.

      ### Where can you survey?
      Certain restrictions apply to exactly where we can operate legally and safely. However, a survey can typically be conducted over most residential properties, commercial sites, and rural buildings. Please email us with your location details for more information on your specific situation.
    actions:
      - type: Button
        label: EMAIL US
        url: mailto:William@aventodrones.co.uk
        style: secondary
    elementId: 'faq'
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-8
          - pb-16
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: left
      actions:
        justifyContent: center
socialImage: /images/unnamed.png
---
