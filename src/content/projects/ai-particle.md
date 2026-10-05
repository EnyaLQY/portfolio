---
title: "BMW - AI Particle Design"
category: "UX Design & Prototyping"
Topic: "Pre-development Project"
timeline: "2025.10 - 2025.11"
summary: "Designed and tested a GenAI particle framework that made AI-generated content discoverable, on-brand, and enjoyable to use in a BMW HMI prototype."
heroGallery:
  - src: "assets/img/portfolio/bmw-particle/PROJECT1.png"
    alt: "GenAI particle concept in the BMW HMI"
  - src: "assets/img/portfolio/bmw-particle/PARTICLE3.png"
    alt: "GenAI particle interface"
info:
  role: "UX Designer & Prototyper"
  tools: "Figma, ProtoPie, Python"
blocks:
  - type: "two-column"
    title: "Project Background"
    layout: "2-1"
    left:
      kind: "text"
      paragraphs:
        - "<strong>Observation: as GenAI becomes commonplace, the interaction - not the capability alone - becomes the differentiator.</strong>"
        - "Automotive teams were rapidly adding generative AI features, creating a risk of feature parity and fragmented in-car experiences. The opportunity was to make generated content feel like a natural extension of the BMW particle system instead of a separate AI add-on."
        - "Drivers needed an approachable way to create, recognize, and arrange AI-generated content without learning a new interaction model or losing control over their in-car environment."
        - "I translated that need into a testable HMI direction: define the information hierarchy, design the generation and placement flows, then build a high-fidelity prototype for usability validation."
    right:
      kind: "data-chart"
      compact: true
      description: "Organizations regularly using GenAI in at least one business function"
      metrics:
        - value: "33%"
          label: "2023"
          progress: 33
        - value: "65%"
          label: "2024"
          progress: 65
        - value: "71%"
          label: "2025"
          progress: 71
      sourceLabel: "McKinsey Global Survey on AI (2023-2025)"
      sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value"
      note: "Organizational adoption; not automotive-specific demand."

  - type: "paragraph"
    title: "Function Workflow"
    paragraphs:
      - "The framework offers three ways to create a particle. Every entry leads to a shared style-selection step, so different inputs still produce a coherent BMW experience."

  - type: "workflow"
    root: "GenAI Particle"
    items:
      - title: "Speech to Particle"
        description: "Create a particle directly through a spoken prompt in the vehicle."
        steps:
          - "Voice input"
          - "Choose style"
          - "Generate particle"
      - title: "Camera Picture to Particle"
        description: "Use the in-car IKS camera to capture a scene and transform it into a particle."
        steps:
          - "IKS camera capture"
          - "Choose style"
          - "Generate particle"
      - title: "My BMW App Upload"
        description: "Upload an image through the companion app, then generate a particle across phone and vehicle."
        steps:
          - "My BMW App upload"
          - "Choose style"
          - "Generate particle"

  - type: "two-column"
    title: "Design Principle"
    layout: "1-1"
    left:
      kind: "text"
      paragraphs:
        - "<strong>Extend an existing mental model instead of introducing a separate AI app.</strong>"
        - "Generated particles can vary in size, content, and visual character. The system needed to make new content understandable at a glance without breaking the hierarchy drivers already knew."
        - "The design balanced a clear relationship to existing particles, flexibility for new formats, and a layout that remains legible as the library grows."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/linghuo.jpg.webp"
        alt: "Existing BMW particle configuration page"
        caption: "The existing particle configuration page provided the interaction foundation."

  - type: "paragraph"
    title: "Key Design Decisions"
    paragraphs:
      - "I used the prototype to make important trade-offs visible early, aligning UX clarity with delivery scope and a framework that could scale beyond the first demo."

  - type: "decision"
    label: "Decision 01"
    question: "Where should users enter GenAI?"
    decision: "Place GenAI at a second-layer entry to protect the existing hierarchy."
    rationale:
      - "A first-layer launcher shortcut was faster to implement, but it competed with established top-level destinations and made the system harder to scale."
      - "A second-layer entry made the relationship between existing and generated particles explicit, while leaving room for GenAI capabilities to grow without restructuring the launcher."
    outcome: "By narrowing the demo to representative use cases, the team preserved the intended UX direction without missing the validation timeline."
    image:
      src: "assets/img/portfolio/bmw-particle/entry.png"
      alt: "First-layer and second-layer GenAI entry comparison"

  - type: "decision"
    label: "Decision 02"
    question: "How should small and large particles be organized?"
    decision: "Give each size a dedicated entry rather than mixing all formats in one generation flow."
    rationale:
      - "A unified entry offered flexibility, but mixed content types, increased generation cost, and asked users to make an extra size decision mid-flow."
      - "Dedicated entries made intent clear from the start and created modular paths that could evolve independently while sharing the same interaction logic."
    outcome: "The resulting structure reduced cognitive load for users and produced a more maintainable foundation for new particle types."
    image:
      src: "assets/img/portfolio/bmw-particle/category.png"
      alt: "Particle size and layout exploration"

  - type: "paragraph"
    title: "Prototype System"
    paragraphs:
      - "Static screens could not validate the feedback, state changes, and content density created by generative interactions. I built a high-fidelity prototype to test the complete flow in a vehicle-like context."
      - "A data-based message-driven prototype centralized states and content data, reducing coupling between screens and keeping complex interactions stable as visual assets and scenarios grew."

  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/background.png"
      alt: "Data-based prototype system architecture"
      caption: "Centralized data and modular interaction logic made the prototype easier to extend and validate."
      maxWidth: "100%"

  - type: "paragraph"
    title: "Interaction Model"
    paragraphs:
      - "The prototype supports two complementary modes: fast, system-guided selection for everyday use and direct spatial adjustment for drivers who need more control."

  - type: "interaction-grid"
    intro: "The prototype supports two complementary modes: fast, system-guided selection for everyday use and direct spatial adjustment for drivers who need more control."
    items:
      - title: "Tap mode"
        description: "A fast, predictable path that fills available slots sequentially and offers replacement or removal when capacity is reached."
        image:
          src: "assets/img/portfolio/bmw-particle/tap2.png"
          alt: "Tap mode interaction"
          caption: "System-guided selection for routine use."
      - title: "Drag mode"
        description: "A flexible spatial path that identifies valid drop areas and triggers placement, replacement, or layout rearrangement on release."
        image:
          src: "assets/img/portfolio/bmw-particle/drag2.png"
          alt: "Drag mode interaction"
          caption: "Direct manipulation with real-time placement feedback."

  - type: "two-column"
    title: "Implementation & Validation"
    layout: "1-1"
    left:
      kind: "text"
      paragraphs:
        - "A Python SDK connected the modular prototype to AI APIs and centrally scheduled placement, replacement, and conflict-handling logic. This let new generated particles reuse established behavior rather than introduce one-off flows."
        - "The prototype supported text-to-image and image-to-image generation with structured prompt rules for BMW-aligned size and layout. Pioneer testing then surfaced practical improvements in localization, icon clarity, and perceived wait time."
    right:
      kind: "image"
      image:
        src: "assets/img/portfolio/bmw-particle/code2.png"
        alt: "Prototype implementation code"
        caption: "Centralized data tracking and scheduling supported dense interaction scenarios."

  - type: "paragraph"
    title: "Usability Study"
    paragraphs:
      - "During pioneer tests, we refined UI styling and feature behavior based on Chinese users' needs and feedback. The full workflow was localized, and abstract icons were replaced with clearer figures so drivers could immediately distinguish the three creation entry points."
      - "Dry runs also showed that AI generation could take longer than expected. I introduced looping transition animations to make the wait state feel intentional and reduce uncertainty while content was being generated."
  
  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/cn-localization.png"
      alt: "Localized AI particle workflow"
      caption: "Localization and clearer visual entry-point cues informed by pioneer testing."

  - type: "image"
    image:
      src: "assets/img/portfolio/bmw-particle/output.png"
      alt: "AI-generated particle outputs"
      caption: "Generated outputs stayed within the particle framework while supporting different content and style directions."
  
  - type: "research-grid"
    eyebrow: "Prototype evaluation"
    participants: "30 drivers in China · ages 25-50"
    methods:
      - "Focus groups"
      - "Individual interviews"
      - "Scenario-based prototype tasks"
    metrics:
      - value: "93%"
        label: "understood the new function and successfully completed the key interaction flow"
      - value: ">50%"
        label: "expressed a positive preference for the feature"
        detail: "More than half of participants preferred having the capability."
      - value: "Keywords"
        label: "Personalization · Innovation · Driving enjoyment"
        detail: "Participants valued a more personal and playful in-car experience."
    note: "Directional project findings from 30 recruited drivers; not intended as a market-representative survey."

  - type: "paragraph"
    title: "Key Takeaways & Next Steps"
    paragraphs:
      - "This high-fidelity prototype supported subsequent user testing and stakeholder meetings. Across multiple rounds of individual interviews and focus groups, <strong>93% of participants</strong> were able to understand and complete the core interactions without difficulty."
      - "Although participants had varied expectations for AI generation, the overall workflow remained intuitive and engaging. The AIGC transition animations received consistently positive feedback and noticeably improved the experience during wait times."
      - "The study showed that a familiar particle framework can make a new GenAI capability understandable without diluting the BMW interaction language. Clear entry points, guided generation styles, and visible placement feedback were central to that result."
      - "Next, I would validate the cross-device My BMW App handoff in a longer in-car trial, compare style-selection comprehension across entry methods, and measure whether the feature remains useful after the initial novelty wears off."

  - type: "embed"
    title: "Official Trailer for GenAI Particle"
    src: "https://www.youtube.com/embed/F7pbGJCueg4"
    width: "80%"
    height: "400"
    caption: "iX3 captures a horse with the in-car camera and transforms the image into an AI-generated particle."

  - type: "paragraph"
    paragraphs:
      - "<strong>Disclaimer:</strong> All materials are presented solely to demonstrate design thinking and process, and do not represent the actual product."
featured: true
---
