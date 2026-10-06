---
title: "XMP Website"
category: "UX Research & Web Development"
timeline: "2023.1 - 2023.5"
cover: "assets/img/portfolio/xmp/Mockup 02.png"
summary: "Designed a research-driven website and data-visualization experience that helps public audiences understand changes in xenophobic speech without compromising academic neutrality."
client: "Cornell Law School"
teamMembers: "7"
position: "UX Researcher & Designer, Team Coordinator"
tools: "Figma"
websiteUrl: "http://info5900.infosci.cornell.edu/"
websiteLabel: "XMP Website"
heroGallery:
  - src: "assets/img/portfolio/xmp/Mockup 02.png"
    alt: "XMP homepage mockup"
  - src: "assets/img/portfolio/xmp/3 - XMP2.png"
    alt: "XMP dashboard section"
  - src: "assets/img/portfolio/xmp/3 - XMP3.png"
    alt: "XMP data storytelling section"
  - src: "assets/img/portfolio/xmp/3 - XMP4.png"
    alt: "XMP interaction section"
  - src: "assets/img/portfolio/xmp/3 - XMP5.png"
    alt: "XMP information module"
  - src: "assets/img/portfolio/xmp/3 - XMP6.png"
    alt: "XMP final screen"
info:
  client: "Cornell Law School"
  teamMembers: "7"
  role: "UX Researcher & Designer, Team Coordinator"
  tools: "Figma"
blocks:
  - type: "paragraph"
    title: "Project Goal"
    paragraphs:
      - "<strong>How might we make research on xenophobic Twitter speech understandable and trustworthy for audiences with very different levels of expertise?</strong>"
      - "The Xenophobia Meter Project (XMP) helps academics, NGOs, and the public explore levels and changes in xenophobic speech on Twitter. Our task was to turn a complex research initiative and its datasets into a clear, accessible website and data-visualization experience."
      - "The design needed to inform without sensationalizing the topic, help visitors interpret the research responsibly, and support the team's continued public outreach."

  - type: "card-grid"
    layout: "3"
    items:
      - label: "Design requirement 01"
        title: "Make complex research legible"
        description: "Explain the meter, its terminology, and its evidence in language that supports non-expert visitors."
      - label: "Design requirement 02"
        title: "Protect neutrality"
        description: "Present the dataset and research context without steering visitors toward a predetermined conclusion."
      - label: "Design requirement 03"
        title: "Support diverse audiences"
        description: "Create clear paths for researchers, the public, NGOs, and institutional stakeholders."

  - type: "paragraph"
    title: "Research & Information Architecture"
    paragraphs:
      - "I began by reviewing comparable hate-speech and xenophobia projects, then observed a virtual calibration meeting at Cornell Law School. Seeing the labeling process first-hand helped connect the public-facing website to the human effort behind the dataset."
      - "I also reviewed the XMP paper and labeler interview transcripts, then organized the findings in an affinity diagram across recruitment and training, labeling procedures, and labelers' challenges, strategies, and growth. These findings informed the content hierarchy and the stories the website needed to tell."

  - type: "image"
    image:
      src: "assets/img/portfolio/xmp/affinity_diagram.png"
      alt: "Affinity diagram for the labeling experience"
      caption: "Synthesizing research evidence revealed the human work and decision-making behind the meter."
      maxWidth: "100%"

  - type: "paragraph"
    paragraphs:
      - "Working with the client, the team translated those research findings into an information hierarchy that balanced methodology, results, the labeling experience, and ways to explore the meter."

  - type: "image"
    image:
      src: "assets/img/portfolio/xmp/Information Hierarchy.png"
      alt: "XMP information hierarchy"
      caption: "The hierarchy established clear entry points while keeping the research narrative connected."
      maxWidth: "100%"

  - type: "paragraph"
    title: "From Concept to High-Fidelity Prototype"
    paragraphs:
      - "The team iterated through low-, mid-, and high-fidelity prototypes so we could validate the content model early, then refine the website's visual credibility and interaction details with the client."

  - type: "two-column"
    layout: "1-2"
    left:
      kind: "text"
      paragraphs:
        - "<h5>Low fidelity: establish the content model</h5>"
        - "Early screens used Cornell red and lightweight layouts to make the proposed information structure tangible and collect directional client feedback before visual details were fixed."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/xmp/Mid fi.png"
        alt: "Early XMP prototype"
        caption: "Early screens tested content organization and page priorities."

  - type: "two-column"
    spaceBefore: "50"
    layout: "1-2"
    left:
      kind: "text"
      paragraphs:
        - "<h5>Mid fidelity: explore a credible visual language</h5>"
        - "After client feedback, the UX team explored typography, color, and component directions with guidance from Cornell's branding office. The yellow direction I designed was selected as the project's visual foundation."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/xmp/Visual explorations.png"
        alt: "XMP visual exploration"
        caption: "Visual exploration balanced institutional credibility with a more approachable research experience."

  - type: "two-column"
    spaceBefore: "50"
    layout: "1-2"
    left:
      kind: "text"
      paragraphs:
        - "<h5>High fidelity: prepare for validation</h5>"
        - "Once the visual direction was selected, we created a consistent high-fidelity prototype with unified type, components, and revised content. This prototype became the basis for usability testing and technical handoff."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/xmp/High fi.png"
        alt: "High-fidelity XMP prototype"
        caption: "The high-fidelity prototype brought the research narrative and interaction model together."

  - type: "research-grid"
    title: "User Testing"
    eyebrow: "Moderated usability evaluation"
    participants: "5 participants across nationalities, religions, and professions"
    methods:
      - "Moderated prototype walkthroughs"
      - "Task completion and navigation observation"
      - "Post-task discussion"
    metrics:
      - value: "5"
        label: "participants"
        detail: "A deliberately diverse set of perspectives"
      - value: "4"
        label: "evaluation lenses"
        detail: "Effectiveness, efficiency, error rate, and experience"
      - value: "3"
        label: "priority themes"
        detail: "Readability, trust, and navigation"
    testing:
      title: "Testing focus"
      paragraphs:
        - "I tested the high-fidelity prototype to identify friction before development was finalized. The goal was not to optimize for every possible audience request, but to protect the site's role as a neutral, informational academic resource."
        - "The feedback was synthesized into actionable themes rather than treated as a feature wishlist."

  - type: "card-grid"
    layout: "3"
    items:
      - label: "Insight 01 · readability"
        title: "Dense content slowed comprehension"
        description: "Participants needed clearer text hierarchy and more digestible ways to understand research concepts and visualizations."
      - label: "Insight 02 · navigation"
        title: "Location and next steps were unclear"
        description: "The navigation bar needed stronger wayfinding, and visitors expected an obvious contact path."
      - label: "Insight 03 · credibility"
        title: "Institutional context builds trust"
        description: "Participants looked for signals of the project's academic rigor, including Cornell affiliation, funders, and methodology context."

  - type: "paragraph"
    title: "Design Iteration"
    paragraphs:
      - "I turned the feedback into a focused improvement plan: keep the information neutral, make it easier to read and navigate, and provide the context visitors needed to assess the research's credibility."

  - type: "process-grid"
    layout: "1x2"
    approaches:
      - label: "Iteration track 01"
        title: "Make the research easier to absorb"
        description: "We improved comprehension without oversimplifying the research or compromising the project's academic tone."
        steps:
          - "Revise explanatory content"
          - "Increase key font sizes"
          - "Improve text and visualization hierarchy"
          - "Add an MD4SG lightening video"
      - label: "Iteration track 02"
        title: "Clarify movement and credibility"
        description: "We made the site's structure more transparent while strengthening the institutional signals that help visitors understand the project's foundation."
        steps:
          - "Simplify the navigation bar"
          - "Add an active-page indicator"
          - "Add a contact entry point"
          - "Add funder acknowledgement and refine the logo"

  - type: "paragraph"
    title: "Implementation & Handoff"
    paragraphs:
      - "The technical team implemented the final website from the high-fidelity prototype and usability-testing recommendations. I contributed across research, design, and coordination, then supported the handoff of research records, prototype files, testing findings, and development guidance for future maintenance."
      - "The project demonstrated how a structured UX process can make sensitive, data-heavy research more approachable while preserving its rigor and neutrality."
      - "<strong>Live site:</strong> <a href=\"http://info5900.infosci.cornell.edu/\" target=\"_blank\" rel=\"noreferrer\">Visit the XMP Website</a>"
featured: true
---
