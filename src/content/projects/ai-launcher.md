---
title: "BMW - AI Agent-Based Launcher"
category: "UX Design & Prototyping"
Topic: "Innovation Project"
timeline: "Undisclosed"
summary: "Explored how an AI agent could shift the in-car launcher from app navigation toward intent-driven, adaptive interaction."
heroGallery:
  - src: "assets/img/portfolio/bmw-launcher/PROJECT2.png"
    alt: "AI agent-based launcher concept"
  - src: "assets/img/portfolio/bmw-launcher/research.png"
    alt: "AI launcher benchmark research"
info:
  role: "UX Designer & Prototyper"
  tools: "Figma, ProtoPie, Python"
blocks:
  - type: "two-column"
    title: "Project Background"
    layout: "1-1"
    left:
      kind: "text"
      paragraphs:
        - "<strong>How might an in-car home screen evolve when people express intent instead of navigating menus?</strong>"
        - "Benchmark research across mainstream GenAI models, leading OEM experiences, and AI tools pointed to the same shift: interaction is moving from UI-led navigation toward natural, intent-led requests."
        - "The opportunity was not to add another assistant to the launcher. It was to explore how an agent could understand context, personalize the starting point, and help carry a task forward within a familiar BMW HMI."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-launcher/research3.png"
        alt: "Research informing the AI launcher opportunity"

  - type: "paragraph"
    title: "Core Design Problem"
    paragraphs:
      - "The launcher is the system's most frequent entry point, yet conventional home screens assume users know where to go before they act. An agent-based system needs to respond to a goal without making the result feel unpredictable."
  - type: "question-grid"
    questions:
      - label: "Question 01"
        question: "How should the homepage reorganize around user intent rather than hierarchical navigation?"
      - label: "Question 02"
        question: "How can an AI agent help users act while preserving clarity, control, and trust?"

  - type: "paragraph"
    title: "Designing for Controlled Generation"
    paragraphs:
      - "<strong>Generative flexibility needs a stable interaction foundation.</strong> An agent can adapt the launcher to intent, but unconstrained output risks inconsistent hierarchy, unstable patterns, and a weakened brand experience."
      - "I used the existing component library and design guidelines as structured reference input for the LLM. This allowed generated layouts to respond dynamically while continuing to reuse approved visual and interaction rules."
      - "The result was a controllable framework: the agent could propose new launcher states without becoming a separate, visually unpredictable system."

  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-launcher/design_system.png"
      alt: "Design-system foundation for controlled generation"
      caption: "Structured design-system inputs constrained generated launcher states while preserving flexibility."
      maxWidth: "100%"

  - type: "paragraph"
    title: "Experience Framework"
    paragraphs:
      - "I designed two complementary use cases for the Chinese market: one gives drivers direct control over their launcher, while the other turns a multi-step goal into an understandable, visualized routine."

  - type: "workflow"
    root: "AI Launcher"
    items:
      - title: "Customize Launcher"
        description: "Drivers shape a personal home screen while the system keeps the layout coherent and usable."
        steps:
          - "Express preference"
          - "Compose widget layout"
          - "Review and adjust"
      - title: "Agent Routine"
        description: "The agent consolidates sequential tasks into a visible routine that reduces interaction cost while driving."
        steps:
          - "State a driving goal"
          - "Plan task sequence"
          - "Show execution path"

  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-launcher/roadmap.png"
      alt: "AI launcher scenario roadmap"
      caption: "Scenario concepts translated the two experience pillars into an agent-based launcher roadmap."
      maxWidth: "100%"

  - type: "paragraph"
    title: "Prototype Implementation"
    paragraphs:
      - "Technical feasibility was explored alongside the concept, not after it. I referenced open-source agent architectures to establish the foundational logic, then connected ProtoPie interactions with API code and Python-based behavior."
      - "This produced an end-to-end prototype in which the launcher could interpret a voice-led intent, select relevant widgets, and assemble a purposeful layout rather than merely simulate a static concept."
  
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-launcher/implementation.png"
      alt: "AI launcher prototype implementation"
      caption: "Prototype logic connected intent interpretation, widget selection, and rendered launcher states."

  - type: "embed"
    title: "Prototype Demo"
    src: "https://www.youtube.com/embed/SBkUDjApTgA"
    caption: "The launcher dynamically selects a widget layout from a voice-led user intent."
    width: "80%"
    height: "400"

  - type: "paragraph"
    title: "Outcome & Next Step"
    paragraphs:
      - "<h5>What the prototype made tangible</h5>"
      - "The high-fidelity prototype gave cross-functional stakeholders a concrete way to evaluate an agent-based launcher: not as an abstract AI concept, but as a controllable HMI direction with a feasible interaction and implementation path."
      - "<h5>What I would validate next</h5>"
      - "The next phase would test comprehension and trust with drivers in realistic in-car scenarios, compare agent-suggested layouts against manual customization, and define the moments where the system should ask for confirmation rather than act proactively."

  - type: "paragraph"
    paragraphs:
      - "<strong>Disclaimer:</strong> All materials are presented solely to demonstrate design thinking and process, and do not represent the actual product."
featured: true
---
